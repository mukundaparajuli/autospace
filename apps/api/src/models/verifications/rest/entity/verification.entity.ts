import { Verification } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class VerificationEntity
  implements RestrictProperties<VerificationEntity, Verification>
{
  id: string;
  createdAt: Date;
  updatedAt: Date;
  garageId: string;
  verified: boolean;
  adminId: string;
}
