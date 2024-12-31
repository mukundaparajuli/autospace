import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { ReviewsService } from './reviews.service';
import { Review } from './entity/review.entity';
import { FindUniqueReviewArgs } from './dtos/find.args';
import { CreateReviewInput } from './dtos/create-review.input';
import { UpdateReviewInput } from './dtos/update-review.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Customer } from 'src/models/customers/graphql/entity/customer.entity';

@Resolver(() => Review)
export class ReviewsResolver {
  constructor(
    private readonly reviewsService: ReviewsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Review)
  createReview(
    @Args('createReviewInput') args: CreateReviewInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id.toString());
    return this.reviewsService.create(args);
  }

  @Query(() => [Review], { name: 'reviews' })
  findAll() {
    return this.reviewsService.findAll();
  }

  @Query(() => Review, { name: 'review' })
  findOne(@Args() args: FindUniqueReviewArgs) {
    return this.reviewsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Review)
  async updateReview(
    @Args('updateReviewInput') args: UpdateReviewInput,
    @GetUser() user: GetUserType,
  ) {
    const review = await this.prisma.review.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, review.id.toString());
    return this.reviewsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Review)
  async removeReview(
    @Args() args: FindUniqueReviewArgs,
    @GetUser() user: GetUserType,
  ) {
    const review = await this.prisma.review.findUnique(args);
    checkRowLevelPermission(user, review.id.toString());
    return this.reviewsService.remove(args);
  }

  @ResolveField(() => Customer)
  async customer(@Parent() parent: Review) {
    return await this.prisma.customer.findUnique({ where: { id: parent.customerId } });
  }

  @ResolveField(() => Customer)
  async garage(@Parent() parent: Review) {
    return await this.prisma.garage.findUnique({ where: { id: parent.garageId } });
  }
}
