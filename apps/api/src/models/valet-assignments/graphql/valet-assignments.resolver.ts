import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ValetAssignmentsService } from './valet-assignments.service';
import { ValetAssignment } from './entity/valet-assignment.entity';
import { FindUniqueValetAssignmentArgs } from './dtos/find.args';
import { CreateValetAssignmentInput } from './dtos/create-valet-assignment.input';
import { UpdateValetAssignmentInput } from './dtos/update-valet-assignment.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Valet } from 'src/models/valets/graphql/entity/valet.entity';
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity';

@Resolver(() => ValetAssignment)
export class ValetAssignmentsResolver {
  constructor(
    private readonly valetAssignmentsService: ValetAssignmentsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  createValetAssignment(
    @Args('createValetAssignmentInput') args: CreateValetAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.valetAssignmentsService.create(args);
  }

  @Query(() => [ValetAssignment], { name: 'valetAssignments' })
  findAll() {
    return this.valetAssignmentsService.findAll();
  }

  @Query(() => ValetAssignment, { name: 'valetAssignment' })
  findOne(@Args() args: FindUniqueValetAssignmentArgs) {
    return this.valetAssignmentsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  async updateValetAssignment(
    @Args('updateValetAssignmentInput') args: UpdateValetAssignmentInput,
    @GetUser() user: GetUserType,
  ) {
    const valetAssignment = await this.prisma.valetAssignment.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, valetAssignment.id);
    return this.valetAssignmentsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => ValetAssignment)
  async removeValetAssignment(
    @Args() args: FindUniqueValetAssignmentArgs,
    @GetUser() user: GetUserType,
  ) {
    const valetAssignment = await this.prisma.valetAssignment.findUnique(args);
    checkRowLevelPermission(user, valetAssignment.id);
    return this.valetAssignmentsService.remove(args);
  }

  @ResolveField(() => Valet)
  async pickupValet(@Parent() valetAssignment: ValetAssignment) {
    return this.prisma.valet.findUnique({ where: { id: valetAssignment.pickupValetId } })
  }

  @ResolveField(() => Valet)
  async returnValet(@Parent() valetAssignment: ValetAssignment) {
    return this.prisma.valet.findUnique({ where: { id: valetAssignment.returnValetId } })
  }

  @ResolveField(() => Booking)
  async booking(@Parent() valetAssignment: ValetAssignment) {
    return this.prisma.booking.findUnique({ where: { id: valetAssignment.bookingId } })
  }
}
