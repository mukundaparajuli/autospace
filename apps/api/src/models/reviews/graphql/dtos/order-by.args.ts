import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class ReviewOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ReviewOrderByWithRelationInputStrict,
      Prisma.ReviewOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  rating: Prisma.SortOrder;
  comment: Prisma.SortOrder;
  customerId: Prisma.SortOrder;
  garageId: Prisma.SortOrder;
  Customer: Prisma.CustomerOrderByWithRelationInput;
  Garage: Prisma.GarageOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class ReviewOrderByWithRelationInput extends PartialType(
  ReviewOrderByWithRelationInputStrict,
) {}

@InputType()
export class ReviewOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
