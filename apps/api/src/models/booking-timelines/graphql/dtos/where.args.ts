import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, BookingStatus, Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  IntFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { BookingWhereInput } from 'src/models/bookings/graphql/dtos/where.args';
import { ManagerWhereInput } from 'src/models/managers/graphql/dtos/where.args';
import { ValetWhereInput } from 'src/models/valets/graphql/dtos/where.args';

@InputType()
export class BookingTimelineWhereUniqueInput {
  id: number;
}

@InputType()
export class EnumBookingStatusFilter {
  @Field(() => BookingStatus, { nullable: true })
  equals: BookingStatus;
  @Field(() => [BookingStatus], { nullable: true })
  in: BookingStatus[]
  @Field(() => [BookingStatus], { nullable: true })
  notIn: BookingStatus[]
  @Field(() => BookingStatus, { nullable: true })
  not: BookingStatus
}

@InputType()
export class BookingTimelineWhereInputStrict
  implements
  RestrictProperties<
    BookingTimelineWhereInputStrict,
    Prisma.BookingTimelineWhereInput
  > {
  id: IntFilter;
  timestamp: DateTimeFilter;

  @Field(() => $Enums.BookingStatus)
  status: EnumBookingStatusFilter;

  bookingId: StringFilter;
  valetId: StringFilter;
  managerId: StringFilter;
  Booking: BookingWhereInput;
  Valet: ValetWhereInput;
  Manager: ManagerWhereInput;
  // Todo: Add the below field decorator only to the $Enums types.

  AND: BookingTimelineWhereInput[];
  OR: BookingTimelineWhereInput[];
  NOT: BookingTimelineWhereInput[];
}

@InputType()
export class BookingTimelineWhereInput extends PartialType(
  BookingTimelineWhereInputStrict,
) { }

@InputType()
export class BookingTimelineListRelationFilter {
  every?: BookingTimelineWhereInput;
  some?: BookingTimelineWhereInput;
  none?: BookingTimelineWhereInput;
}

@InputType()
export class BookingTimelineRelationFilter {
  is?: BookingTimelineWhereInput;
  isNot?: BookingTimelineWhereInput;
}
