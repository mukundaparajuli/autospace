import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class CustomerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CustomerOrderByWithRelationInputStrict,
      Prisma.CustomerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  displayName: Prisma.SortOrder;
  User: Prisma.UserOrderByWithRelationInput;
  Bookings: Prisma.BookingOrderByRelationAggregateInput;
  Reviews: Prisma.ReviewOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class CustomerOrderByWithRelationInput extends PartialType(
  CustomerOrderByWithRelationInputStrict,
) {}

@InputType()
export class CustomerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
