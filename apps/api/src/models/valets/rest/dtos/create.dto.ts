import { PickType } from '@nestjs/swagger';
import { ValetEntity } from '../entity/valet.entity';

export class CreateValet extends PickType(ValetEntity, [
  'id',
  'companyId',
  'displayName',
]) {}
