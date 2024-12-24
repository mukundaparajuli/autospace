import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { RestrictProperties } from 'src/common/dtos/common.input';

@InputType()
export class ValetOrderByWithRelationInputStrict
  implements
  RestrictProperties<
    ValetOrderByWithRelationInputStrict,
    Prisma.ValetOrderByWithRelationInput
  > {
  @Field(() => Prisma.SortOrder)
  id: Prisma.SortOrder;
  createdAt: Prisma.SortOrder;
  updatedAt: Prisma.SortOrder;
  displayName: Prisma.SortOrder;
  companyId: Prisma.SortOrder;
  User: Prisma.UserOrderByWithRelationInput;
  Company: Prisma.CompanyOrderByWithRelationInput;
  BookingTimeline: Prisma.BookingTimelineOrderByRelationAggregateInput;
  PickupAssignments: Prisma.ValetAssignmentOrderByRelationAggregateInput;
  ReturnAssignments: Prisma.ValetAssignmentOrderByRelationAggregateInput;
  // Todo: Add below field decorator to the SortOrder properties.
}

@InputType()
export class ValetOrderByWithRelationInput extends PartialType(
  ValetOrderByWithRelationInputStrict,
) { }

@InputType()
export class ValetOrderByRelationAggregateInput {
  @Field(() => Prisma.SortOrder)
  _count?: Prisma.SortOrder;
}
