import { Manager } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class ManagerEntity
  implements RestrictProperties<ManagerEntity, Manager> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  displayName: string;
  companyId: string;
}
