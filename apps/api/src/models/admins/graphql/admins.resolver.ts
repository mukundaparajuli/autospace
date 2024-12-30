import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { AdminsService } from './admins.service';
import { Admin } from './entity/admin.entity';
import { FindUniqueAdminArgs } from './dtos/find.args';
import { CreateAdminInput } from './dtos/create-admin.input';
import { UpdateAdminInput } from './dtos/update-admin.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Verification } from 'src/models/verifications/graphql/entity/verification.entity';
import { User } from 'src/models/users/graphql/entity/user.entity';

@Resolver(() => Admin)
export class AdminsResolver {
  constructor(
    private readonly adminsService: AdminsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Admin)
  createAdmin(
    @Args('createAdminInput') args: CreateAdminInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.adminsService.create(args);
  }

  @Query(() => [Admin], { name: 'admins' })
  findAll() {
    return this.adminsService.findAll();
  }

  @Query(() => Admin, { name: 'admin' })
  findOne(@Args() args: FindUniqueAdminArgs) {
    return this.adminsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Admin)
  async updateAdmin(
    @Args('updateAdminInput') args: UpdateAdminInput,
    @GetUser() user: GetUserType,
  ) {
    const admin = await this.prisma.admin.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, admin.id);
    return this.adminsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Admin)
  async removeAdmin(
    @Args() args: FindUniqueAdminArgs,
    @GetUser() user: GetUserType,
  ) {
    const admin = await this.prisma.admin.findUnique(args);
    checkRowLevelPermission(user, admin.id);
    return this.adminsService.remove(args);
  }

  @ResolveField(() => User)
  async user(@Parent() parent: Admin) {
    return this.prisma.user.findUnique({
      where: {
        id: parent.id
      }
    })
  }

  @ResolveField(() => [Verification])
  async verifications(@Parent() parent: Admin) {
    return this.prisma.verification.findMany({
      where: {
        adminId: parent.id
      }
    })
  }

  @ResolveField(() => Number)
  async verificationCount(@Parent() parent: Admin) {
    return this.prisma.verification.count({
      where: {
        adminId: parent.id
      }
    })
  }
}
