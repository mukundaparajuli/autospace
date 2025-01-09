import { Field, InputType, ObjectType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';
import { CustomerOrderByWithRelationInput } from 'src/models/customers/graphql/dtos/order-by.args';
import { ManagerOrderByWithRelationInput } from 'src/models/managers/graphql/dtos/order-by.args';
import { ValetOrderByWithRelationInput } from 'src/models/valets/graphql/dtos/order-by.args';

@ObjectType()
@InputType()
export class UserOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    UserOrderByWithRelationInputStrict,
    Omit<
      Prisma.UserOrderByWithRelationInput,
      'Credentials' | 'AuthProvider' | 'Admin' | 'image'
    >
  > {
  Valet: ValetOrderByWithRelationInput;
  Manager: ManagerOrderByWithRelationInput;
  Customer: CustomerOrderByWithRelationInput;

  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  name: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  createdAt: Prisma.SortOrder;
  @Field(() => Prisma.SortOrder)
  updatedAt: Prisma.SortOrder;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class UserOrderByWithRelationInput extends PartialType(
  UserOrderByWithRelationInputStrict,
) {
  @Field(() => String, { nullable: true })
  id?: Prisma.SortOrder;
}

@InputType()
export class UserOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
