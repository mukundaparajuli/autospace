import { Field, InputType, PartialType } from '@nestjs/graphql';
import { $Enums, Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  FloatFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args';
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args';
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args';

@InputType()
export class SlotWhereUniqueInput {
  id: string;
}

@InputType()
export class EnumSlotTypeFilter {
  @Field(() => $Enums.SlotType, { nullable: true })
  equals?: $Enums.SlotType;
  @Field(() => [$Enums.SlotType], { nullable: true })
  in?: $Enums.SlotType[]
  @Field(() => [$Enums.SlotType], { nullable: true })
  notIn?: $Enums.SlotType[]
  @Field(() => $Enums.SlotType, { nullable: true })
  not?: $Enums.SlotType
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

  slotType: EnumSlotTypeFilter;

  garageId: StringFilter;
  companyId: StringFilter;
  Garage: GarageRelationFilter;
  Bookings: BookingListRelationFilter;
  Company: CompanyRelationFilter;
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
