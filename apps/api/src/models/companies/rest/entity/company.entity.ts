import { Company } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class CompanyEntity
  implements RestrictProperties<CompanyEntity, Company> {
  id: string;
  displayName: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
