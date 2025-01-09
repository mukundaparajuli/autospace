import { SlotEntity } from '../entity/slot.entity';
import { PickType } from '@nestjs/swagger';

export class CreateSlot extends PickType(SlotEntity, [
  'id',
  'length',
  'breadth',
  'height',
  'displayName',
  'garageId',
  'pricePerHour',
  'slotType',
]) {}
