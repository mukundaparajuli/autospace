import { ValetAssignment } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class ValetAssignmentEntity
  implements RestrictProperties<ValetAssignmentEntity, ValetAssignment> {
  id: string;
  bookingId: string;
  createdAt: Date;
  updatedAt: Date;
  pickUpLat: number;
  pickUpLong: number;
  returnLat: number;
  returnLong: number;
  pickupValetId: string;
  returnValetId: string;
}
