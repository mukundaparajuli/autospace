import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { Customer } from './entity/customer.entity';
import { FindUniqueCustomerArgs } from './dtos/find.args';
import { CreateCustomerInput } from './dtos/create-customer.input';
import { UpdateCustomerInput } from './dtos/update-customer.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { User } from 'src/models/users/graphql/entity/user.entity';
import { Booking } from 'src/models/bookings/graphql/entity/booking.entity';

@Resolver(() => Customer)
export class CustomersResolver {
  constructor(
    private readonly customersService: CustomersService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated()
  @Mutation(() => Customer)
  createCustomer(
    @Args('createCustomerInput') args: CreateCustomerInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.customersService.create(args);
  }

  @Query(() => [Customer], { name: 'customers' })
  findAll() {
    return this.customersService.findAll();
  }

  @Query(() => Customer, { name: 'customer' })
  findOne(@Args() args: FindUniqueCustomerArgs) {
    return this.customersService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Customer)
  async updateCustomer(
    @Args('updateCustomerInput') args: UpdateCustomerInput,
    @GetUser() user: GetUserType,
  ) {
    const customer = await this.prisma.customer.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, customer.id);
    return this.customersService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Customer)
  async removeCustomer(
    @Args() args: FindUniqueCustomerArgs,
    @GetUser() user: GetUserType,
  ) {
    const customer = await this.prisma.customer.findUnique(args);
    checkRowLevelPermission(user, customer.id);
    return this.customersService.remove(args);
  }

  @ResolveField(() => User)
  async user(@Parent() parent: Customer) {
    return await this.prisma.user.findUnique({
      where: {
        id: parent.id,
      },
    });
  }

  @ResolveField(() => [Booking])
  async bookings(@Parent() parent: Customer) {
    return await this.prisma.booking.findMany({
      where: {
        customerId: parent.id,
      },
    });
  }

  @ResolveField(() => [Booking])
  async reviews(@Parent() parent: Customer) {
    return await this.prisma.review.findMany({
      where: {
        customerId: parent.id,
      },
    });
  }
}
