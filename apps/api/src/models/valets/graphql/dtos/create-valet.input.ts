import { InputType, PickType } from '@nestjs/graphql';
import { Valet } from '../entity/valet.entity';

@InputType()
export class CreateValetInput extends PickType(
  Valet,
  ['id', 'displayName', 'companyId'],
  InputType,
) { }
