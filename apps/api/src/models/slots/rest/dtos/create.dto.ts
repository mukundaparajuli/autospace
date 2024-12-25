import { SlotEntity } from '../entity/slot.entity';
import { PickType } from '@nestjs/graphql';

export class CreateSlot extends PickType(SlotEntity, [
  'id',
  'length',
  'breadth',
  'height',
  'companyId',
  'displayName',
  'garageId',
  'pricePerHour',
]) {}
