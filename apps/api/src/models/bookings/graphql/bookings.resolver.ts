import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BookingsService } from './bookings.service';
import { Booking } from './entity/booking.entity';
import { FindUniqueBookingArgs } from './dtos/find.args';
import { CreateBookingInput } from './dtos/create-booking.input';
import { UpdateBookingInput } from './dtos/update-booking.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Resolver(() => Booking)
export class BookingsResolver {
  constructor(
    private readonly bookingsService: BookingsService,
    private readonly prisma: PrismaService,
  ) {}

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
}
