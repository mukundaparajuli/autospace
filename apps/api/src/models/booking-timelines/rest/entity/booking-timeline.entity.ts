import { BookingStatus, BookingTimeline } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

export class BookingTimelineEntity
  implements RestrictProperties<BookingTimelineEntity, BookingTimeline>
{
  id: number;
  status: BookingStatus;
  bookingId: string;
  timestamp: Date;
  valetId: string;
  managerId: string;
}
