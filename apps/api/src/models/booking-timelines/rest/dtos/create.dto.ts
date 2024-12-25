import { BookingTimelineEntity } from '../entity/booking-timeline.entity';
import { PickType } from '@nestjs/graphql';

export class CreateBookingTimeline extends PickType(BookingTimelineEntity, [
  'id',
  'status',
  'bookingId',
]) {}
