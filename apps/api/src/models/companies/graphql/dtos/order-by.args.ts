import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class CompanyOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      CompanyOrderByWithRelationInputStrict,
      Prisma.CompanyOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  displayName: Prisma.SortOrder;
  description: Prisma.SortOrder;
  Managers: Prisma.ManagerOrderByRelationAggregateInput;
  Valets: Prisma.ValetOrderByRelationAggregateInput;
  Garages: Prisma.GarageOrderByRelationAggregateInput;
  Slot: Prisma.SlotOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class CompanyOrderByWithRelationInput extends PartialType(
  CompanyOrderByWithRelationInputStrict,
) {}

@InputType()
export class CompanyOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
