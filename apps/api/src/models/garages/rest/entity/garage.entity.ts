import { Garage } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class GarageEntity implements RestrictProperties<GarageEntity, Garage> {
  description: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  garageName: string;
  image: string[];
  companyId: string;
  addressId: string;
}
