import { OmitType } from '@nestjs/swagger';
import { ReviewEntity } from '../entity/review.entity';
import { PickType } from '@nestjs/graphql';

export class CreateReview extends PickType(ReviewEntity, [
  'id', 'comment', 'customerId', 'garageId', 'rating'
]) { }
