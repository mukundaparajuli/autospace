import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DateTimeFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { GarageListRelationFilter } from 'src/models/garages/graphql/dtos/where.args';
import { ManagerListRelationFilter } from 'src/models/managers/graphql/dtos/where.args';
import { SlotListRelationFilter } from 'src/models/slots/graphql/dtos/where.args';
import { ValetListRelationFilter } from 'src/models/valets/graphql/dtos/where.args';

@InputType()
export class CompanyWhereUniqueInput {
  id: string;
}

@InputType()
export class CompanyWhereInputStrict
  implements
  RestrictProperties<CompanyWhereInputStrict, Prisma.CompanyWhereInput> {
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  displayName: StringFilter;
  description: StringFilter;
  Managers: ManagerListRelationFilter;
  Valets: ValetListRelationFilter;
  Garages: GarageListRelationFilter;
  Slot: SlotListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: CompanyWhereInput[];
  OR: CompanyWhereInput[];
  NOT: CompanyWhereInput[];
}

@InputType()
export class CompanyWhereInput extends PartialType(CompanyWhereInputStrict) { }

@InputType()
export class CompanyListRelationFilter {
  every?: CompanyWhereInput;
  some?: CompanyWhereInput;
  none?: CompanyWhereInput;
}

@InputType()
export class CompanyRelationFilter {
  is?: CompanyWhereInput;
  isNot?: CompanyWhereInput;
}