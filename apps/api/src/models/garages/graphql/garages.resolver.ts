import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { GaragesService } from './garages.service';
import { Garage } from './entity/garage.entity';
import { FindUniqueGarageArgs } from './dtos/find.args';
import { CreateGarageInput } from './dtos/create-garage.input';
import { UpdateGarageInput } from './dtos/update-garage.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Company } from 'src/models/companies/graphql/entity/company.entity';
import { Slot } from 'src/models/slots/graphql/entity/slot.entity';
import { Verification } from 'src/models/verifications/graphql/entity/verification.entity';
import { Review } from 'src/models/reviews/graphql/entity/review.entity';

@Resolver(() => Garage)
export class GaragesResolver {
  constructor(
    private readonly garagesService: GaragesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Garage)
  createGarage(
    @Args('createGarageInput') args: CreateGarageInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.garagesService.create(args);
  }

  @Query(() => [Garage], { name: 'garages' })
  findAll() {
    return this.garagesService.findAll();
  }

  @Query(() => Garage, { name: 'garage' })
  findOne(@Args() args: FindUniqueGarageArgs) {
    return this.garagesService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Garage)
  async updateGarage(
    @Args('updateGarageInput') args: UpdateGarageInput,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, garage.id);
    return this.garagesService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Garage)
  async removeGarage(
    @Args() args: FindUniqueGarageArgs,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique(args);
    checkRowLevelPermission(user, garage.id);
    return this.garagesService.remove(args);
  }

  @ResolveField(() => Company)
  async company(@Parent() parent: Garage) {
    return await this.prisma.company.findUnique({
      where: {
        id: parent.companyId,
      },
    });
  }

  @ResolveField(() => Company)
  async address(@Parent() parent: Garage) {
    return await this.prisma.address.findUnique({
      where: {
        id: parent.addressId,
      },
    });
  }

  @ResolveField(() => [Slot])
  async slots(@Parent() parent: Garage) {
    return await this.prisma.slot.findMany({
      where: {
        garageId: parent.id,
      },
    });
  }

  @ResolveField(() => [Verification])
  async verifications(@Parent() parent: Garage) {
    return await this.prisma.verification.findMany({
      where: {
        garageId: parent.id,
      },
    });
  }

  @ResolveField(() => [Review])
  async reviews(@Parent() parent: Garage) {
    return await this.prisma.review.findMany({
      where: {
        garageId: parent.id,
      },
    });
  }
}
