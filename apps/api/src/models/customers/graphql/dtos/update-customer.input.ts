import { CreateCustomerInput } from './create-customer.input';
import { InputType, PartialType } from '@nestjs/graphql';
import { Customer } from '../entity/customer.entity';

@InputType()
export class UpdateCustomerInput extends PartialType(CreateCustomerInput) {
  id: Customer['id'];
}
