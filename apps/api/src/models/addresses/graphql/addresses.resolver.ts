import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { AddressesService } from './addresses.service';
import { Address } from './entity/address.entity';
import { FindUniqueAddressArgs } from './dtos/find.args';
import { CreateAddressInput } from './dtos/create-address.input';
import { UpdateAddressInput } from './dtos/update-address.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Garage } from 'src/models/garages/graphql/entity/garage.entity';

@Resolver(() => Address)
export class AddressesResolver {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly prisma: PrismaService,
  ) { }

  @AllowAuthenticated()
  @Mutation(() => Address)
  createAddress(
    @Args('createAddressInput') args: CreateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, args.id);
    return this.addressesService.create(args);
  }

  @Query(() => [Address], { name: 'addresses' })
  findAll() {
    return this.addressesService.findAll();
  }

  @Query(() => Address, { name: 'address' })
  findOne(@Args() args: FindUniqueAddressArgs) {
    return this.addressesService.findOne(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async updateAddress(
    @Args('updateAddressInput') args: UpdateAddressInput,
    @GetUser() user: GetUserType,
  ) {
    const address = await this.prisma.address.findUnique({
      where: { id: args.id },
    });
    checkRowLevelPermission(user, address.id);
    return this.addressesService.update(args);
  }

  @AllowAuthenticated()
  @Mutation(() => Address)
  async removeAddress(
    @Args() args: FindUniqueAddressArgs,
    @GetUser() user: GetUserType,
  ) {
    const address = await this.prisma.address.findUnique(args);
    checkRowLevelPermission(user, address.id);
    return this.addressesService.remove(args);
  }

  @ResolveField(() => [Garage])
  garages(@Parent() parent: Address) {
    return this.prisma.garage.findMany({
      where: {
        addressId: parent.id
      }
    })
  }
}
