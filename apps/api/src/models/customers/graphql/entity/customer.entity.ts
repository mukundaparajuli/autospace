import { Field, ID, ObjectType, InputType } from '@nestjs/graphql';
import { Customer as CustomerType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Customer implements RestrictProperties<Customer, CustomerType> {
  @Field(() => ID, { nullable: true })
  id: string;
  displayName: string;
  createdAt: Date;
  updatedAt: Date;
}
