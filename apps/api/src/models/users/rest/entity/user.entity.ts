import { User } from '@prisma/client';
import { IsDate, IsString, IsInt } from 'class-validator';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class UserEntity implements RestrictProperties<UserEntity, User> {
  id: string;
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}
