import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

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
  Company: Prisma.CompanyOrderByWithRelationInput;
  Address: Prisma.AddressOrderByWithRelationInput;
  Slots: Prisma.SlotOrderByRelationAggregateInput;
  Verification: Prisma.VerificationOrderByRelationAggregateInput;
  Reviews: Prisma.ReviewOrderByRelationAggregateInput;
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
