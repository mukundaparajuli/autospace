import { Field, ObjectType } from '@nestjs/graphql';
import { User as UserType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class User implements RestrictProperties<User, UserType> {
  @Field({ nullable: true })
  id: string;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
