import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import { DateTimeFilter, FloatFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';

@InputType()
export class SlotWhereUniqueInput {
  id: string;
}

@InputType()
export class SlotWhereInputStrict
  implements RestrictProperties<SlotWhereInputStrict, Prisma.SlotWhereInput> {
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  displayName: StringFilter;
  pricePerHour: FloatFilter;
  length: FloatFilter;
  breadth: FloatFilter;
  height: FloatFilter;
  @Field(() => $Enums.SlotType)
  slotType: $Enums.SlotType;
  garageId: StringFilter;
  companyId: StringFilter;
  Garage: (Prisma.Without<Prisma.GarageScalarRelationFilter, Prisma.GarageWhereInput> & Prisma.GarageWhereInput) | (Prisma.Without<Prisma.GarageWhereInput, Prisma.GarageScalarRelationFilter> & Prisma.GarageScalarRelationFilter);
  Company: (Prisma.Without<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput> & Prisma.CompanyWhereInput) | (Prisma.Without<Prisma.CompanyWhereInput, Prisma.CompanyScalarRelationFilter> & Prisma.CompanyScalarRelationFilter);
  Bookings: Prisma.BookingListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.

  AND: SlotWhereInput[];
  OR: SlotWhereInput[];
  NOT: SlotWhereInput[];
}

@InputType()
export class SlotWhereInput extends PartialType(SlotWhereInputStrict) { }

@InputType()
export class SlotListRelationFilter {
  every?: SlotWhereInput;
  some?: SlotWhereInput;
  none?: SlotWhereInput;
}

@InputType()
export class SlotRelationFilter {
  is?: SlotWhereInput;
  isNot?: SlotWhereInput;
}
