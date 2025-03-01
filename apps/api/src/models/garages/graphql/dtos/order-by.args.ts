import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { AddressOrderByWithRelationInput } from 'src/models/addresses/graphql/dtos/order-by.args';
import { CompanyOrderByWithRelationInput } from 'src/models/companies/graphql/dtos/order-by.args';
import { ReviewOrderByRelationAggregateInput } from 'src/models/reviews/graphql/dtos/order-by.args';
import { SlotOrderByRelationAggregateInput } from 'src/models/slots/graphql/dtos/order-by.args';
import { VerificationOrderByWithRelationInput } from 'src/models/verifications/graphql/dtos/order-by.args';

@InputType()
export class GarageOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      GarageOrderByWithRelationInputStrict,
      Prisma.GarageOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  garageName: Prisma.SortOrder;
  description: Prisma.SortOrder;
  image: Prisma.SortOrder;
  companyId: Prisma.SortOrder;
  addressId: Prisma.SortOrder;
  Company: CompanyOrderByWithRelationInput;
  Address: AddressOrderByWithRelationInput;
  Verification: VerificationOrderByWithRelationInput;
  Reviews: ReviewOrderByRelationAggregateInput;
  Slots: SlotOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class GarageOrderByWithRelationInput extends PartialType(
  GarageOrderByWithRelationInputStrict,
) {}

@InputType()
export class GarageOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
