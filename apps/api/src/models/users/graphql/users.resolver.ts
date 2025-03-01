import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entity/user.entity';
import { FindUniqueUserArgs } from './dtos/find.args';
import {
  LoginInput,
  LoginOutput,
  RegisterWithCredentialsInput,
  RegisterWithProvidersInput,
} from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Admin } from 'src/models/admins/graphql/entity/admin.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => User)
  createUserWithCredentailsInput(
    @Args('createUserWithCredentailsInput') args: RegisterWithCredentialsInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.usersService.registerUserWithCredentialsInput(args);
  }

  @Mutation(() => User)
  createUserWithProvidersInput(
    @Args('createUserWithProvidersInput') args: RegisterWithProvidersInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.usersService.registerUserWithProvidersInput(args);
  }

  @Mutation(() => LoginOutput)
  loginUser(@Args('loginInput') args: LoginInput) {
    return this.usersService.login(args);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args() args: FindUniqueUserArgs) {
    return this.usersService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async updateUser(
    @Args('updateUserInput') args: UpdateUserInput,
    @GetUser() user: GetUserType,
  ) {
    const userInfo = await this.prisma.user.findUnique({ where: args });
    console.log(userInfo);
    checkRowLevelPermission(user, user.id);
    return this.usersService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => User)
  async removeUser(
    @Args() args: FindUniqueUserArgs,
    @GetUser() user: GetUserType,
  ) {
    const userInfo = await this.prisma.user.findUnique(args);
    console.log(userInfo);
    checkRowLevelPermission(user, user.id);
    return this.usersService.remove(args);
  }

  @ResolveField(() => Admin, { nullable: true })
  async admin(@Parent() user: User) {
    return this.prisma.admin.findUnique({
      where: {
        id: user.id,
      },
    });
  }

  @ResolveField(() => Admin, { nullable: true })
  async manager(@Parent() user: User) {
    return this.prisma.manager.findUnique({
      where: {
        id: user.id,
      },
    });
  }

  @ResolveField(() => Admin, { nullable: true })
  async valet(@Parent() user: User) {
    return this.prisma.valet.findUnique({
      where: {
        id: user.id,
      },
    });
  }

  @ResolveField(() => Admin, { nullable: true })
  async customer(@Parent() user: User) {
    return this.prisma.customer.findUnique({
      where: {
        id: user.id,
      },
    });
  }
}
