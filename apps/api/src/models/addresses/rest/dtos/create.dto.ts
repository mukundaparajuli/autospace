import { AddressEntity } from '../entity/address.entity';
import { PickType } from '@nestjs/swagger';

export class CreateAddress extends PickType(AddressEntity, [
  'id',
  'addressName',
]) {}
