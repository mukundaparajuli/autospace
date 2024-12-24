import { PickType } from '@nestjs/swagger';
import { GarageEntity } from '../entity/garage.entity';

export class CreateGarage extends PickType(GarageEntity, [
  'id', 'description', 'garageName', 'image', 'companyId', 'addressId'
]) { }
