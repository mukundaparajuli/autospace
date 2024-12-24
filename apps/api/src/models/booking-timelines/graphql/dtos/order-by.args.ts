import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { BookingOrderByWithRelationInput } from 'src/models/bookings/graphql/dtos/order-by.args';
import { ManagerOrderByWithRelationInput } from 'src/models/managers/graphql/dtos/order-by.args';
import { ValetOrderByWithRelationInput } from 'src/models/valets/graphql/dtos/order-by.args';

@InputType()
export class BookingTimelineOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    BookingTimelineOrderByWithRelationInputStrict,
    Prisma.BookingTimelineOrderByWithRelationInput
  > {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  timestamp: Prisma.SortOrder;
  status: Prisma.SortOrder;
  bookingId: Prisma.SortOrder;
  valetId: Prisma.SortOrder;
  managerId: Prisma.SortOrder;
  Booking: BookingOrderByWithRelationInput;
  Valet: ValetOrderByWithRelationInput;
  Manager: ManagerOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class BookingTimelineOrderByWithRelationInput extends PartialType(
  BookingTimelineOrderByWithRelationInputStrict,
) { }

@InputType()
export class BookingTimelineOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
