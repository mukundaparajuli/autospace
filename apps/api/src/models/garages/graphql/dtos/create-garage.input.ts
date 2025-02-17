import { InputType, PickType } from '@nestjs/graphql';
import { Garage } from '../entity/garage.entity';

@InputType()
export class CreateGarageInput extends PickType(
  Garage,
  ['id', 'garageName', 'description', 'image', 'companyId', 'addressId'],
  InputType,
) {}
