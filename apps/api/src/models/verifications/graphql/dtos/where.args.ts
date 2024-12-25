import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  BoolFilter,
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';

@InputType()
export class VerificationWhereUniqueInput {
  id: string;
}

@InputType()
export class VerificationWhereInputStrict
  implements
    RestrictProperties<
      VerificationWhereInputStrict,
      Prisma.VerificationWhereInput
    >
{
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  verified: BoolFilter;
  adminId: StringFilter;
  garageId: StringFilter;
  Admin:
    | (Prisma.Without<
        Prisma.AdminScalarRelationFilter,
        Prisma.AdminWhereInput
      > &
        Prisma.AdminWhereInput)
    | (Prisma.Without<
        Prisma.AdminWhereInput,
        Prisma.AdminScalarRelationFilter
      > &
        Prisma.AdminScalarRelationFilter);
  Garage:
    | (Prisma.Without<
        Prisma.GarageScalarRelationFilter,
        Prisma.GarageWhereInput
      > &
        Prisma.GarageWhereInput)
    | (Prisma.Without<
        Prisma.GarageWhereInput,
        Prisma.GarageScalarRelationFilter
      > &
        Prisma.GarageScalarRelationFilter);
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: VerificationWhereInput[];
  OR: VerificationWhereInput[];
  NOT: VerificationWhereInput[];
}

@InputType()
export class VerificationWhereInput extends PartialType(
  VerificationWhereInputStrict,
) {}

@InputType()
export class VerificationListRelationFilter {
  every?: VerificationWhereInput;
  some?: VerificationWhereInput;
  none?: VerificationWhereInput;
}

@InputType()
export class VerificationRelationFilter {
  is?: VerificationWhereInput;
  isNot?: VerificationWhereInput;
}
