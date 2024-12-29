import { Field, ObjectType } from '@nestjs/graphql';
import { $Enums, Booking as BookingType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@ObjectType()
export class Booking implements RestrictProperties<Booking, BookingType> {
  @Field({ nullable: true })
  id: string;
  createdAt: Date;
  updatedAt: Date;
  pricePerHour: number;
  totalPrice: number;
  startTime: Date;
  endTime: Date;

  @Field(() => $Enums.BookingStatus)
  status: $Enums.BookingStatus

  vehicleNumber: string;
  phoneNumber: string;
  passcode: string;
  slotId: string;
  customerId: string;
  bookingTimelineId: number;
  // Todo Add below to make optional fields optional.
}
