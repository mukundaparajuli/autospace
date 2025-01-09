import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CustomerRelationFilter } from 'src/models/customers/graphql/dtos/where.args';
import { ManagerRelationFilter } from 'src/models/managers/graphql/dtos/where.args';
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args';

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
  Customer: CustomerRelationFilter;
  Valet: ValetRelationFilter;
  Manager: ManagerRelationFilter;
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
