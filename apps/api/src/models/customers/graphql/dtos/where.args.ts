import { InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import {
  DateTimeFilter,
  RestrictProperties,
  StringFilter,
} from 'src/common/dtos/common.input';
import { BookingListRelationFilter } from 'src/models/bookings/graphql/dtos/where.args';
import { ReviewListRelationFilter } from 'src/models/reviews/graphql/dtos/where.args';
// import { UserOrderByRelationAggregateInput } from 'src/models/users/graphql/dtos/order-by.args';
import { UserRelationFilter } from 'src/models/users/graphql/dtos/where.args';

@InputType()
export class CustomerWhereUniqueInput {
  id: string;
}

@InputType()
export class CustomerWhereInputStrict
  implements
    RestrictProperties<CustomerWhereInputStrict, Prisma.CustomerWhereInput>
{
  User: UserRelationFilter;
  id: StringFilter;
  createdAt: DateTimeFilter;
  updatedAt: DateTimeFilter;
  displayName: StringFilter;
  Bookings: BookingListRelationFilter;
  Reviews: ReviewListRelationFilter;

  AND: CustomerWhereInput[];
  OR: CustomerWhereInput[];
  NOT: CustomerWhereInput[];
}

@InputType()
export class CustomerWhereInput extends PartialType(CustomerWhereInputStrict) {}

@InputType()
export class CustomerListRelationFilter {
  every?: CustomerWhereInput;
  some?: CustomerWhereInput;
  none?: CustomerWhereInput;
}

@InputType()
export class CustomerRelationFilter {
  is?: CustomerWhereInput;
  isNot?: CustomerWhereInput;
}
