import { $Enums, Booking } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class BookingEntity
  implements RestrictProperties<BookingEntity, Booking>
{
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status: $Enums.BookingStatus;
  pricePerHour: number;
  totalPrice: number;
  startTime: Date;
  endTime: Date;
  vehicleNumber: string;
  phoneNumber: string;
  passcode: string;
  slotId: string;
  customerId: string;
  bookingTimelineId: number;
}
