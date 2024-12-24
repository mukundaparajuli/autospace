import { Field, ObjectType } from '@nestjs/graphql';
import { ValetAssignment as ValetAssignmentType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class ValetAssignment
  implements RestrictProperties<ValetAssignment, ValetAssignmentType> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  pickUpLat: number;
  @Field({ nullable: true })
  pickUpLong: number;
  @Field({ nullable: true })
  returnLat: number;
  @Field({ nullable: true })
  returnLong: number;
  @Field({ nullable: true })
  pickupValetId: string;
  @Field({ nullable: true })
  returnValetId: string;
  bookingId: string;
  // Todo Add below to make optional fields optional.
}
