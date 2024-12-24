import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CompanyOrderByWithRelationInput } from 'src/models/companies/graphql/dtos/order-by.args';
import { GarageOrderByWithRelationInput } from 'src/models/garages/graphql/dtos/order-by.args';

@InputType()
export class AddressOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    AddressOrderByWithRelationInputStrict,
    Prisma.AddressOrderByWithRelationInput
  > {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  addressName: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  lat: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  long: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  companyId: Prisma.SortOrder;
  Company: CompanyOrderByWithRelationInput;
  Garage: GarageOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class AddressOrderByWithRelationInput extends PartialType(
  AddressOrderByWithRelationInputStrict,
) { }

@InputType()
export class AddressOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
