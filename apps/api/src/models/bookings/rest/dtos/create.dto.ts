import { OmitType } from '@nestjs/swagger';
import { BookingEntity } from '../entity/booking.entity';
import { PickType } from '@nestjs/graphql';

export class CreateBooking extends PickType(BookingEntity, [
  'id', 'pricePerHour', 'totalPrice', 'startTime', 'endTime', 'endTime', 'vehicleNumber', 'phoneNumber', 'passcode', 'slotId', 'customerId', 'bookingTimelineId'
]) { }