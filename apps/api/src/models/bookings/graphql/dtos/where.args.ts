import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, BookingStatus, Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  FloatFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { BookingTimelineListRelationFilter } from 'src/models/booking-timelines/graphql/dtos/where.args';
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args';
import { SlotRelationFilter } from 'src/models/slots/graphql/dtos/where.args';
import { ValetAssignmentRelationFilter } from 'src/models/valet-assignments/graphql/dtos/where.args';

@InputType()
export class BookingWhereUniqueInput {
  id: string;
}

// @InputType()
// export class EnumBookingStatusFilter {
//   @Field(() => BookingStatus)
//   equals?: $Enums.BookingStatus;
//   @Field(() => [BookingStatus], { nullable: true })
//   in?: $Enums.BookingStatus[];
//   @Field(() => [BookingStatus], { nullable: true })
//   notIn?: $Enums.BookingStatus[];
//   @Field(() => BookingStatus, { nullable: true })
//   not?: $Enums.BookingStatus;
// }

@InputType()
// implements
// RestrictProperties<BookingWhereInputStrict, Prisma.BookingWhereInput>
export class BookingWhereInputStrict {
  bookingTimelineId: IntFilter;
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

  // status: BookingStatus;
  slotId: StringFilter;
  customerId: StringFilter;
  ValetAssignment: ValetAssignmentRelationFilter;
  Customer: CustomerRelationFilter;
  Slot: SlotRelationFilter;
  BookingTimeline: BookingTimelineListRelationFilter;

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
