import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  FloatFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { BookingRelationFilter } from 'src/models/bookings/graphql/dtos/where.args';
import { ValetRelationFilter } from 'src/models/valets/graphql/dtos/where.args';

@InputType()
export class ValetAssignmentWhereUniqueInput {
  id: string;
}

@InputType()
export class ValetAssignmentWhereInputStrict
  implements
    RestrictProperties<
      ValetAssignmentWhereInputStrict,
      Prisma.ValetAssignmentWhereInput
    >
{
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  pickUpLat: FloatFilter;
  pickUpLong: FloatFilter;
  returnLat: FloatFilter;
  returnLong: FloatFilter;
  pickupValetId: StringFilter;
  returnValetId: StringFilter;
  bookingId: StringFilter;
  PickupValet: ValetRelationFilter;
  ReturnValet: ValetRelationFilter;
  Booking: BookingRelationFilter;
  // Todo: Add the below field decorator only to the $Enums types.
  // @Field(() => $Enums.x)

  AND: ValetAssignmentWhereInput[];
  OR: ValetAssignmentWhereInput[];
  NOT: ValetAssignmentWhereInput[];
}

@InputType()
export class ValetAssignmentWhereInput extends PartialType(
  ValetAssignmentWhereInputStrict,
) {}

@InputType()
export class ValetAssignmentListRelationFilter {
  every?: ValetAssignmentWhereInput;
  some?: ValetAssignmentWhereInput;
  none?: ValetAssignmentWhereInput;
}

@InputType()
export class ValetAssignmentRelationFilter {
  is?: ValetAssignmentWhereInput;
  isNot?: ValetAssignmentWhereInput;
}
