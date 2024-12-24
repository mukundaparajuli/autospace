import { CustomerEntity } from '../entity/customer.entity';
import { PickType } from '@nestjs/swagger';

export class CreateCustomer extends PickType(CustomerEntity, [
  'id', 'displayName'
]) { }
