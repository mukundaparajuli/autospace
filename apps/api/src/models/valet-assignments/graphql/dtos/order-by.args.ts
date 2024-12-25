import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class ValetAssignmentOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ValetAssignmentOrderByWithRelationInputStrict,
      Prisma.ValetAssignmentOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  pickUpLat: Prisma.SortOrder | Prisma.SortOrderInput;
  pickUpLong: Prisma.SortOrder | Prisma.SortOrderInput;
  returnLat: Prisma.SortOrder | Prisma.SortOrderInput;
  returnLong: Prisma.SortOrder | Prisma.SortOrderInput;
  pickupValetId: Prisma.SortOrder | Prisma.SortOrderInput;
  returnValetId: Prisma.SortOrder | Prisma.SortOrderInput;
  bookingId: Prisma.SortOrder;
  PickupValet: Prisma.ValetOrderByWithRelationInput;
  ReturnValet: Prisma.ValetOrderByWithRelationInput;
  Booking: Prisma.BookingOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class ValetAssignmentOrderByWithRelationInput extends PartialType(
  ValetAssignmentOrderByWithRelationInputStrict,
) {}

@InputType()
export class ValetAssignmentOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
