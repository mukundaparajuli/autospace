import { AddressEntity } from '../entity/address.entity';
import { PickType } from '@nestjs/graphql';

export class CreateAddress extends PickType(AddressEntity, [
  'id',
  'addressName'
]) { }
