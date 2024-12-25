import { Field, ObjectType } from '@nestjs/graphql';
import { Review as ReviewType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Review implements RestrictProperties<Review, ReviewType> {
  id: number;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  rating: number;
  @Field({ nullable: true })
  comment: string;
  garageId: string;
  // Todo Add below to make optional fields optional.
}
