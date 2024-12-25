import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';

@InputType()
export class ValetWhereUniqueInput {
  id: string;
}

@InputType()
export class ValetWhereInputStrict
  implements RestrictProperties<ValetWhereInputStrict, Prisma.ValetWhereInput>
{
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  displayName: StringFilter;
  companyId: StringFilter;
  User:
    | (Prisma.Without<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput> &
        Prisma.UserWhereInput)
    | (Prisma.Without<Prisma.UserWhereInput, Prisma.UserScalarRelationFilter> &
        Prisma.UserScalarRelationFilter);
  Company:
    | (Prisma.Without<
        Prisma.CompanyScalarRelationFilter,
        Prisma.CompanyWhereInput
      > &
        Prisma.CompanyWhereInput)
    | (Prisma.Without<
        Prisma.CompanyWhereInput,
        Prisma.CompanyScalarRelationFilter
      > &
        Prisma.CompanyScalarRelationFilter);
  BookingTimeline: Prisma.BookingTimelineListRelationFilter;
  PickupAssignments: Prisma.ValetAssignmentListRelationFilter;
  ReturnAssignments: Prisma.ValetAssignmentListRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ValetWhereInput[];
  OR: ValetWhereInput[];
  NOT: ValetWhereInput[];
}

@InputType()
export class ValetWhereInput extends PartialType(ValetWhereInputStrict) {}

@InputType()
export class ValetListRelationFilter {
  every?: ValetWhereInput;
  some?: ValetWhereInput;
  none?: ValetWhereInput;
}

@InputType()
export class ValetRelationFilter {
  is?: ValetWhereInput;
  isNot?: ValetWhereInput;
}
