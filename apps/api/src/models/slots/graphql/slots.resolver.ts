import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { SlotsService } from './slots.service';
import { Slot } from './entity/slot.entity';
import { FindManySlotArgs, FindUniqueSlotArgs } from './dtos/find.args';
import { CreateSlotInput } from './dtos/create-slot.input';
import { UpdateSlotInput } from './dtos/update-slot.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Garage } from 'src/models/garages/graphql/entity/garage.entity';
import { Company } from 'src/models/companies/graphql/entity/company.entity';
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity';

@Resolver(() => Slot)
export class SlotsResolver {
  constructor(
    private readonly slotsService: SlotsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Slot)
  createSlot(
    @Args('createSlotInput') args: CreateSlotInput,
    @GetUser() user: GetUserType,
  ) {
    return this.slotsService.create(args);
  }

  @Query(() => [Slot], { name: 'slots' })
  findAll() {
    return this.slotsService.findAll();
  }

  @Query(() => Slot, { name: 'slot' })
  findOne(@Args() args: FindUniqueSlotArgs) {
    return this.slotsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Slot)
  async updateSlot(
    @Args('updateSlotInput') args: UpdateSlotInput,
    @GetUser() user: GetUserType,
  ) {
    const slot = await this.prisma.slot.findUnique({ where: { id: args.id } });
    checkRowLevelPermission(user, slot.id);
    return this.slotsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Slot)
  async removeSlot(
    @Args() args: FindUniqueSlotArgs,
    @GetUser() user: GetUserType,
  ) {
    const slot = await this.prisma.slot.findUnique(args);
    checkRowLevelPermission(user, slot.id);
    return this.slotsService.remove(args);
  }

  @ResolveField(() => Garage)
  async garage(@Parent() slot: Slot) {
    return this.prisma.garage.findUnique({
      where: { id: slot.garageId },
    });
  }

  @ResolveField(() => Company)
  async company(@Parent() slot: Slot) {
    return this.prisma.company.findUnique({
      where: { id: slot.companyId },
    });
  }

  @ResolveField(() => [Booking])
  async bookings(@Parent() parent: Slot) {
    return await this.prisma.booking.findMany({
      where: {
        slotId: parent.id,
      },
    });
  }
}
