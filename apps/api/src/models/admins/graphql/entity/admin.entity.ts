import { Field, ObjectType } from '@nestjs/graphql';
import { Admin as AdminType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Admin implements RestrictProperties<Admin, AdminType> {
  // Todo Add below to make optional fields optional.
  @Field({ nullable: true })
  id: string
  createdAt: Date
  updatedAt: Date
}