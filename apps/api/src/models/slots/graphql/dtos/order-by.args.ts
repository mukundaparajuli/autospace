import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { BookingOrderByRelationAggregateInput } from 'src/models/bookings/graphql/dtos/order-by.args';
import { CompanyOrderByWithRelationInput } from 'src/models/companies/graphql/dtos/order-by.args';
import { GarageOrderByWithRelationInput } from 'src/models/garages/graphql/dtos/order-by.args';

@InputType()
export class SlotOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    SlotOrderByWithRelationInputStrict,
    Prisma.SlotOrderByWithRelationInput
  > {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  displayName: Prisma.SortOrder;
  pricePerHour: Prisma.SortOrder;
  length: Prisma.SortOrder;
  breadth: Prisma.SortOrder;
  height: Prisma.SortOrder;

  @Field(() => Prisma.SortOrder)
  slotType: Prisma.SortOrder;

  garageId: Prisma.SortOrder;
  companyId: Prisma.SortOrder;

  Garage: GarageOrderByWithRelationInput
  Bookings: BookingOrderByRelationAggregateInput
  Company: CompanyOrderByWithRelationInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class SlotOrderByWithRelationInput extends PartialType(
  SlotOrderByWithRelationInputStrict,
) { }

@InputType()
export class SlotOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
