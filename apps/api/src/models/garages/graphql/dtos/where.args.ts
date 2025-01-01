import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { AddressListRelationFilter } from 'src/models/addresses/graphql/dtos/where.args';
import { CompanyListRelationFilter } from 'src/models/companies/graphql/dtos/where.args';
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args';
import { SlotListRelationFilter } from 'src/models/slots/graphql/dtos/where.args';
import { VerificationListRelationFilter } from 'src/models/verifications/graphql/dtos/where.args';

@InputType()
export class GarageWhereUniqueInput {
  id: string;
}

@InputType()
export class GarageWhereInputStrict
  implements
  RestrictProperties<GarageWhereInputStrict, Prisma.GarageWhereInput> {
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  garageName: StringFilter;
  description: StringFilter;
  image: StringFilter[];
  companyId: StringFilter;
  addressId: StringFilter;
  Company: CompanyListRelationFilter;
  Address: AddressListRelationFilter;
  Slots: SlotListRelationFilter;
  Verification: VerificationListRelationFilter;
  Reviews: ReviewListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: GarageWhereInput[];
  OR: GarageWhereInput[];
  NOT: GarageWhereInput[];
}

@InputType()
export class GarageWhereInput extends PartialType(GarageWhereInputStrict) { }

@InputType()
export class GarageListRelationFilter {
  every?: GarageWhereInput;
  some?: GarageWhereInput;
  none?: GarageWhereInput;
}

@InputType()
export class GarageRelationFilter {
  is?: GarageWhereInput;
  isNot?: GarageWhereInput;
}
