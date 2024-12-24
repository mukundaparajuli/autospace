import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Customer, Prisma, Slot } from '@prisma/client';
import { DateTimeFilter, FloatFilter, IntFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { BookingTimelineListRelationFilter } from 'src/models/booking-timelines/graphql/dtos/where.args';
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args';
import { SlotRelationFilter } from 'src/models/slots/graphql/dtos/where.args';
import { ValetAssignmentListRelationFilter } from 'src/models/valet-assignments/graphql/dtos/where.args';

@InputType()
export class BookingWhereUniqueInput {
  id: string;
}

@InputType()
export class BookingWhereInputStrict
  implements
  RestrictProperties<BookingWhereInputStrict, Prisma.BookingWhereInput> {
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  pricePerHour: FloatFilter;
  totalPrice: FloatFilter;
  startTime: DateTimeFilter;
  endTime: DateTimeFilter;
  vehicleNumber: StringFilter;
  phoneNumber: StringFilter;
  passcode: StringFilter;
  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus | Prisma.EnumBookingStatusFilter<'Booking'>;
  slotId: StringFilter;
  customerId: StringFilter;
  bookingTimelineId: IntFilter;
  Slot: SlotRelationFilter;
  Customer: CustomerRelationFilter;
  BookingTimeline: BookingTimelineListRelationFilter;
  ValetAssignment: ValetAssignmentListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.

  AND: BookingWhereInput[];
  OR: BookingWhereInput[];
  NOT: BookingWhereInput[];
}

@InputType()
export class BookingWhereInput extends PartialType(BookingWhereInputStrict) { }

@InputType()
export class BookingListRelationFilter {
  every?: BookingWhereInput;
  some?: BookingWhereInput;
  none?: BookingWhereInput;
}

@InputType()
export class BookingRelationFilter {
  is?: BookingWhereInput;
  isNot?: BookingWhereInput;
}
