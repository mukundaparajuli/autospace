import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class BookingOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      BookingOrderByWithRelationInputStrict,
      Prisma.BookingOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  pricePerHour: Prisma.SortOrder;
  totalPrice: Prisma.SortOrder;
  startTime: Prisma.SortOrder;
  endTime: Prisma.SortOrder;
  vehicleNumber: Prisma.SortOrder;
  phoneNumber: Prisma.SortOrder;
  passcode: Prisma.SortOrder;
  status: Prisma.SortOrder;
  slotId: Prisma.SortOrder;
  customerId: Prisma.SortOrder;
  bookingTimelineId: Prisma.SortOrder;
  Slot: Prisma.SlotOrderByWithRelationInput;
  Customer: Prisma.CustomerOrderByWithRelationInput;
  BookingTimeline: Prisma.BookingTimelineOrderByRelationAggregateInput;
  ValetAssignment: Prisma.ValetAssignmentOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class BookingOrderByWithRelationInput extends PartialType(
  BookingOrderByWithRelationInputStrict,
) {}

@InputType()
export class BookingOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
