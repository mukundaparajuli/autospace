import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class UserWhereUniqueInput {
  id: string;
}

@InputType()
export class UserWhereInputStrict
  implements
    RestrictProperties<
      UserWhereInputStrict,
      Omit<
        Prisma.UserWhereInput,
        'Credentials' | 'AuthProvider' | 'Admin' | 'image'
      >
    >
{
  Customer:
    | (Prisma.Without<
        Prisma.CustomerNullableScalarRelationFilter,
        Prisma.CustomerWhereInput
      > &
        Prisma.CustomerWhereInput)
    | (Prisma.Without<
        Prisma.CustomerWhereInput,
        Prisma.CustomerNullableScalarRelationFilter
      > &
        Prisma.CustomerNullableScalarRelationFilter);
  Valet:
    | (Prisma.Without<
        Prisma.ValetNullableScalarRelationFilter,
        Prisma.ValetWhereInput
      > &
        Prisma.ValetWhereInput)
    | (Prisma.Without<
        Prisma.ValetWhereInput,
        Prisma.ValetNullableScalarRelationFilter
      > &
        Prisma.ValetNullableScalarRelationFilter);
  Manager:
    | (Prisma.Without<
        Prisma.ManagerNullableScalarRelationFilter,
        Prisma.ManagerWhereInput
      > &
        Prisma.ManagerWhereInput)
    | (Prisma.Without<
        Prisma.ManagerWhereInput,
        Prisma.ManagerNullableScalarRelationFilter
      > &
        Prisma.ManagerNullableScalarRelationFilter);
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  AND: UserWhereInput[];
  OR: UserWhereInput[];
  NOT: UserWhereInput[];
}

@InputType()
export class UserWhereInput extends PartialType(UserWhereInputStrict) {}

@InputType()
export class UserListRelationFilter {
  every?: UserWhereInput;
  some?: UserWhereInput;
  none?: UserWhereInput;
}

@InputType()
export class UserRelationFilter {
  is?: UserWhereInput;
  isNot?: UserWhereInput;
}
