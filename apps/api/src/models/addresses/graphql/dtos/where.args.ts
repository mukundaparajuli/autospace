import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Garage, Prisma } from '@prisma/client';
import { DateTimeFilter, FloatFilter, RestrictProperties, StringFilter } from 'src/common/dtos/common.input';
import { CompanyRelationFilter } from 'src/models/companies/graphql/dtos/where.args';
import { GarageRelationFilter } from 'src/models/garages/graphql/dtos/where.args';

@InputType()
export class AddressWhereUniqueInput {
  id: string;
}

@InputType()
export class AddressWhereInputStrict
  implements
  RestrictProperties<AddressWhereInputStrict, Prisma.AddressWhereInput> {
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  addressName: StringFilter;
  lat: FloatFilter;
  long: FloatFilter;
  companyId: StringFilter;
  Company: CompanyRelationFilter;
  Garage: GarageRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: AddressWhereInput[];
  OR: AddressWhereInput[];
  NOT: AddressWhereInput[];
}

@InputType()
export class AddressWhereInput extends PartialType(AddressWhereInputStrict) { }

@InputType()
export class AddressListRelationFilter {
  every?: AddressWhereInput;
  some?: AddressWhereInput;
  none?: AddressWhereInput;
}

@InputType()
export class AddressRelationFilter {
  is?: AddressWhereInput;
  isNot?: AddressWhereInput;
}
