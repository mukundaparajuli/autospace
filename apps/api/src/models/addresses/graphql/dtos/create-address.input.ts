import { InputType, PickType } from '@nestjs/graphql';
import { Address } from '../entity/address.entity';

@InputType()
export class CreateAddressInput extends PickType(Address, ['id', 'lat', 'long', 'addressName', 'companyId'], InputType) { }
