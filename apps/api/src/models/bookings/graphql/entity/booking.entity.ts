import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { $Enums, BookingStatus, Booking as BookingType } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

registerEnumType($Enums.BookingStatus, {
  name: 'BookingStatus',
});

@ObjectType()
export class Booking implements RestrictProperties<Booking, BookingType> {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  @Field({ nullable: true })
  pricePerHour: number;
  @Field({ nullable: true })
  totalPrice: number;
  startTime: Date;
  endTime: Date;

  @Field(() => $Enums.BookingStatus, { nullable: true })
  status: BookingStatus;

  vehicleNumber: string;
  phoneNumber: string;
  passcode: string;
  slotId: string;
  customerId: string;
  bookingTimelineId: number;
  // Todo Add below to make optional fields optional.
}
