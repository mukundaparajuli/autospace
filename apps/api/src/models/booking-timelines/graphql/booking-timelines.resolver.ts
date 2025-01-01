import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { BookingTimelinesService } from './booking-timelines.service';
import { BookingTimeline } from './entity/booking-timeline.entity';
import { FindUniqueBookingTimelineArgs } from './dtos/find.args';
import { CreateBookingTimelineInput } from './dtos/create-booking-timeline.input';
import { UpdateBookingTimelineInput } from './dtos/update-booking-timeline.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity';
import { Valet } from 'src/models/valets/graphql/entity/valet.entity';
import { Manager } from 'src/models/managers/graphql/entity/manager.entity';

@Resolver(() => BookingTimeline)
export class BookingTimelinesResolver {
  constructor(
    private readonly bookingTimelinesService: BookingTimelinesService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  createBookingTimeline(
    @Args('createBookingTimelineInput') args: CreateBookingTimelineInput,
    @GetUser() user: GetUserType,
  ) {
    return this.bookingTimelinesService.create(args);
  }

  @Query(() => [BookingTimeline], { name: 'bookingTimelines' })
  findAll() {
    return this.bookingTimelinesService.findAll();
  }

  @Query(() => BookingTimeline, { name: 'bookingTimeline' })
  findOne(@Args() args: FindUniqueBookingTimelineArgs) {
    return this.bookingTimelinesService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  async updateBookingTimeline(
    @Args('updateBookingTimelineInput') args: UpdateBookingTimelineInput,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, bookingTimeline.id.toString());
    return this.bookingTimelinesService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => BookingTimeline)
  async removeBookingTimeline(
    @Args() args: FindUniqueBookingTimelineArgs,
    @GetUser() user: GetUserType,
  ) {
    const bookingTimeline = await this.prisma.bookingTimeline.findUnique(args);
    checkRowLevelPermission(user, bookingTimeline.id.toString());
    return this.bookingTimelinesService.remove(args);
  }

  @ResolveField(() => Booking)
  async bookingTimeline(@Parent() parent: BookingTimeline) {
    return this.prisma.booking.findUnique({
      where: { id: parent.bookingId },
    });
  }

  @ResolveField(() => Valet)
  async valet(@Parent() parent: BookingTimeline) {
    return this.prisma.valet.findUnique({
      where: { id: parent.valetId },
    });
  }

  @ResolveField(() => Manager)
  async manager(@Parent() parent: BookingTimeline) {
    return this.prisma.manager.findUnique({
      where: { id: parent.managerId },
    });
  }
}
