import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BookingsService } from './bookings.service';
import { Booking } from './entity/booking.entity';
import { FindUniqueBookingArgs } from './dtos/find.args';
import { CreateBookingInput } from './dtos/create-booking.input';
import { UpdateBookingInput } from './dtos/update-booking.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Slot } from 'src/models/slots/graphql/entity/slot.entity';
import { Customer } from 'src/models/customers/graphql/entity/customer.entity';
import { BookingTimeline } from 'src/models/booking-timelines/graphql/entity/booking-timeline.entity';
import { ValetAssignment } from 'src/models/valet-assignments/graphql/entity/valet-assignment.entity';

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  createBooking(
    @Args('createBookingInput') args: CreateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.bookingsService.create(args);
  }

  @Query(() => [Booking], { name: 'bookings' })
  findAll() {
    return this.bookingsService.findAll();
  }

  @Query(() => Booking, { name: 'booking' })
  findOne(@Args() args: FindUniqueBookingArgs) {
    return this.bookingsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async updateBooking(
    @Args('updateBookingInput') args: UpdateBookingInput,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, booking.id);
    return this.bookingsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Booking)
  async removeBooking(
    @Args() args: FindUniqueBookingArgs,
    @GetUser() user: GetUserType,
  ) {
    const booking = await this.prisma.booking.findUnique(args);
    checkRowLevelPermission(user, booking.id);
    return this.bookingsService.remove(args);
  }

  // @ResolveField(() => Slot)
  // async slot(@Parent() parent: Booking) {
  //   return this.prisma.booking.findUnique({ where: { id: parent.slotId } });
  // }

  @ResolveField(() => Customer)
  async customer(@Parent() parent: Booking) {
    return this.prisma.booking.findUnique({ where: { id: parent.customerId } });
  }

  @ResolveField(() => [BookingTimeline])
  async bookingTimelines(@Parent() parent: Booking) {
    return this.prisma.bookingTimeline.findMany({
      where: {
        bookingId: parent.id,
      },
    });
  }

  @ResolveField(() => [ValetAssignment])
  async valetAssignments(@Parent() parent: Booking) {
    return this.prisma.valetAssignment.findMany({
      where: {
        bookingId: parent.id,
      },
    });
  }
}
