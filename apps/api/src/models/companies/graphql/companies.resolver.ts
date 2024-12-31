import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { Company } from './entity/company.entity';
import { FindUniqueCompanyArgs } from './dtos/find.args';
import { CreateCompanyInput } from './dtos/create-company.input';
import { UpdateCompanyInput } from './dtos/update-company.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Manager } from 'src/models/managers/graphql/entity/manager.entity';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(
    private readonly companiesService: CompaniesService,
    private readonly prisma: PrismaService,
  ) {}

  @AllowAuthenticated('manager')
  @Mutation(() => Company)
  createCompany(
    @Args('createCompanyInput') args: CreateCompanyInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.companiesService.create(args);
  }

  @Query(() => [Company], { name: 'companies' })
  findAll() {
    return this.companiesService.findAll();
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args() args: FindUniqueCompanyArgs) {
    return this.companiesService.findOne(args);
  }

  @AllowAuthenticated('manager')
  @Mutation(() => Company)
  async updateCompany(
    @Args('updateCompanyInput') args: UpdateCompanyInput,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, company.id);
    return this.companiesService.update(args);
  }

  @AllowAuthenticated('manager')
  @Mutation(() => Company)
  async removeCompany(
    @Args() args: FindUniqueCompanyArgs,
    @GetUser() user: GetUserType,
  ) {
    const company = await this.prisma.company.findUnique(args);
    checkRowLevelPermission(user, company.id);
    return this.companiesService.remove(args);
  }

  @ResolveField(() => [Manager])
  async managers(@Parent() company: Company) {
    return this.prisma.manager.findMany({
      where: { companyId: company.id },
    });
  }

  @ResolveField(() => [Manager])
  async valets(@Parent() company: Company) {
    return this.prisma.valet.findMany({
      where: { companyId: company.id },
    });
  }

  @ResolveField(() => [Manager])
  async garages(@Parent() company: Company) {
    return this.prisma.garage.findMany({
      where: { companyId: company.id },
    });
  }

  @ResolveField(() => [Manager])
  async slots(@Parent() company: Company) {
    return this.prisma.slot.findMany({
      where: { companyId: company.id },
    });
  }
}
