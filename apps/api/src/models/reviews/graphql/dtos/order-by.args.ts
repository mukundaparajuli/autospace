import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CustomerOrderByRelationAggregateInput } from 'src/models/customers/graphql/dtos/order-by.args';
import { GarageOrderByRelationAggregateInput } from 'src/models/garages/graphql/dtos/order-by.args';

@InputType()
export class ReviewOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    ReviewOrderByWithRelationInputStrict,
    Prisma.ReviewOrderByWithRelationInput
  > {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  rating: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  comment: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  customerId: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  garageId: Prisma.SortOrder;

  Customer: CustomerOrderByRelationAggregateInput;
  Garage: GarageOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class ReviewOrderByWithRelationInput extends PartialType(
  ReviewOrderByWithRelationInputStrict,
) { }

@InputType()
export class ReviewOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
