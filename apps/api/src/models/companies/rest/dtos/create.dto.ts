import { CompanyEntity } from '../entity/company.entity';
import { PickType } from '@nestjs/graphql';

export class CreateCompany extends PickType(CompanyEntity, [
  'id',
  'displayName',
  'description',
]) {}
