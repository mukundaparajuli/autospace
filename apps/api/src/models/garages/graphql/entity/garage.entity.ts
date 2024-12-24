import { ObjectType } from '@nestjs/graphql';
import { Garage as GarageType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Garage implements RestrictProperties<Garage, GarageType> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  companyId: string;
  image: string[];
  description: string;
  garageName: string;
  addressId: string;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
