import { ObjectType } from '@nestjs/graphql';
import { $Enums, Slot as SlotType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Slot implements RestrictProperties<Slot, SlotType> {
  id: string;
  garageId: string;
  createdAt: Date;
  updatedAt: Date;
  displayName: string;
  companyId: string;
  pricePerHour: number;
  length: number;
  breadth: number;
  height: number;
  slotType: $Enums.SlotType;
  // Todo Add below to make optional fields optional.
  // @Field({ nullable: true })
}
