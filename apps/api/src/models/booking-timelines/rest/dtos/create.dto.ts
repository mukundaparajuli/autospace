import { BookingTimelineEntity } from '../entity/booking-timeline.entity';
import { PickType } from '@nestjs/swagger';

export class CreateBookingTimeline extends PickType(BookingTimelineEntity, [
  'id',
  'status',
  'bookingId',
]) {}
