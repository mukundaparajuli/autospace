import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { VerificationsService } from './verifications.service';
import { Verification } from './entity/verification.entity';
import { FindUniqueVerificationArgs } from './dtos/find.args';
import { CreateVerificationInput } from './dtos/create-verification.input';
import { UpdateVerificationInput } from './dtos/update-verification.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Admin } from 'src/models/admins/graphql/entity/admin.entity';

@Resolver(() => Verification)
export class VerificationsResolver {
  constructor(
    private readonly verificationsService: VerificationsService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Verification)
  createVerification(
    @Args('createVerificationInput') args: CreateVerificationInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.verificationsService.create(args);
  }

  @Query(() => [Verification], { name: 'verifications' })
  findAll() {
    return this.verificationsService.findAll();
  }

  @Query(() => Verification, { name: 'verification' })
  findOne(@Args() args: FindUniqueVerificationArgs) {
    return this.verificationsService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Verification)
  async updateVerification(
    @Args('updateVerificationInput') args: UpdateVerificationInput,
    @GetUser() user: GetUserType,
  ) {
    const verification = await this.prisma.verification.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, verification.id);
    return this.verificationsService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Verification)
  async removeVerification(
    @Args() args: FindUniqueVerificationArgs,
    @GetUser() user: GetUserType,
  ) {
    const verification = await this.prisma.verification.findUnique(args);
    checkRowLevelPermission(user, verification.id);
    return this.verificationsService.remove(args);
  }

  @ResolveField(() => Admin)
  async admin(@Parent() parent: Verification) {
    return this.prisma.admin.findUnique({ where: { id: parent.adminId } });
  }

  @ResolveField(() => Admin)
  async garage(@Parent() parent: Verification) {
    return this.prisma.admin.findUnique({ where: { id: parent.garageId } });
  }
}
