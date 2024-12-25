import { $Enums, Slot } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class SlotEntity implements RestrictProperties<SlotEntity, Slot> {
  id: string;
  breadth: number;
  length: number;
  companyId: string;
  height: number;
  displayName: string;
  garageId: string;
  pricePerHour: number;
  slotType: $Enums.SlotType;
  createdAt: Date;
  updatedAt: Date;
}
