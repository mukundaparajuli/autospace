import { Field, ObjectType } from '@nestjs/graphql';
import { Address as AddressType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Address implements RestrictProperties<Address, AddressType> {
  @Field({ nullable: true })
  id: string;
  createdAt: Date;
  updatedAt: Date;
  addressName: string;
  lat: number;
  long: number;
  companyId: string;
  // Todo Add below to make optional fields optional.
}