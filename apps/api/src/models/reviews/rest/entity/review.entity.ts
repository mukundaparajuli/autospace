import { Review } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class ReviewEntity implements RestrictProperties<ReviewEntity, Review> {
  id: number;
  garageId: string;
  customerId: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number;
  comment: string;
}
