import { InputType, PickType } from '@nestjs/graphql';
import { Booking } from '../entity/booking.entity';

@InputType()
export class CreateBookingInput extends PickType(
  Booking,
  [
    'id',
    'pricePerHour',
    'totalPrice',
    'startTime',
    'endTime',
    'vehicleNumber',
    'phoneNumber',
    'passcode',
    'slotId',
    'customerId',
    'bookingTimelineId',
  ],
  InputType,
) { }
