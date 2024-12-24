import { Address } from '@prisma/client';
import { IsDate, IsString, IsInt } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class AddressEntity
  implements RestrictProperties<AddressEntity, Address> {
  id: string
  createdAt: Date
  updatedAt: Date
  addressName: string
  lat: number | null
  long: number | null
}
