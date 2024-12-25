import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class ManagerOrderByWithRelationInputStrict
  implements
    RestrictProperties<
      ManagerOrderByWithRelationInputStrict,
      Prisma.ManagerOrderByWithRelationInput
    >
{
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  displayName: Prisma.SortOrder;
  companyId: Prisma.SortOrder;
  User: Prisma.UserOrderByWithRelationInput;
  Company: Prisma.CompanyOrderByWithRelationInput;
  BookingTimeLine: Prisma.BookingTimelineOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class ManagerOrderByWithRelationInput extends PartialType(
  ManagerOrderByWithRelationInputStrict,
) {}

@InputType()
export class ManagerOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
