import { Valet } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class ValetEntity implements RestrictProperties<ValetEntity, Valet> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  displayName: string;
  companyId: string;
}
