import { ReviewEntity } from '../entity/review.entity';
import { PickType } from '@nestjs/swagger';

export class CreateReview extends PickType(ReviewEntity, [
  'id',
  'comment',
  'customerId',
  'garageId',
  'rating',
]) { }
