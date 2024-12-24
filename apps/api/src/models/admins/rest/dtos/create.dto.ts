import { OmitType } from '@nestjs/swagger';
import { AdminEntity } from '../entity/admin.entity';
import { PickType } from '@nestjs/graphql';

export class CreateAdmin extends PickType(AdminEntity, [
  'id',
]) { }
