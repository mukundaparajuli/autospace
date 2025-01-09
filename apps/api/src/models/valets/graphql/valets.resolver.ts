import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { ValetsService } from './valets.service';
import { Valet } from './entity/valet.entity';
import { FindManyValetArgs, FindUniqueValetArgs } from './dtos/find.args';
import { CreateValetInput } from './dtos/create-valet.input';
import { UpdateValetInput } from './dtos/update-valet.input';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { GetUserType } from 'src/common/types';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { Logger } from '@nestjs/common';

@Resolver(() => Valet)
export class ValetsResolver {
  private readonly logger = new Logger(ValetsResolver.name);

  constructor(
    private readonly valetsService: ValetsService,
    private readonly prisma: PrismaService,
  ) { }

  @Query(() => [Valet], { name: 'valets' })
  async findAll(@Args() args: FindManyValetArgs): Promise<Valet[]> {
    this.logger.log(`findAll called with args: ${JSON.stringify(args)}`);
    try {
      return await this.valetsService.findAll(args);
    } catch (error) {
      this.logger.error('Error in findAll', error.stack);
      throw error;
    }
  }

  @Query(() => Valet, { name: 'valet' })
  async findOne(@Args() args: FindUniqueValetArgs): Promise<Valet> {
    this.logger.log(`findOne called with args: ${JSON.stringify(args)}`);
    try {
      return await this.valetsService.findOne(args);
    } catch (error) {
      this.logger.error('Error in findOne', error.stack);
      throw error;
    }
  }

  // @AllowAuthenticated()
  // @Mutation(() => Valet)
  // async createValet(
  //   @Args('createValetInput') args: CreateValetInput,
  //   @GetUser() user: GetUserType,
  // ): Promise<Valet> {
  //   this.logger.log(
  //     `createValet called with args: ${JSON.stringify(args)} by user: ${user.id}`,
  //   );
  //   try {
  //     checkRowLevelPermission(user, args.id);
  //     return await this.valetsService.create(args);
  //   } catch (error) {
  //     this.logger.error('Error in createValet', error.stack);
  //     throw error;
  //   }
  // }

  // @AllowAuthenticated()
  // @Mutation(() => Valet)
  // async updateValet(
  //   @Args('updateValetInput') args: UpdateValetInput,
  //   @GetUser() user: GetUserType,
  // ): Promise<Valet> {
  //   this.logger.log(
  //     `updateValet called with args: ${JSON.stringify(args)} by user: ${user.id}`,
  //   );
  //   try {
  //     const valet = await this.prisma.valet.findUnique({
  //       where: { id: args.id },
  //     });
  //     checkRowLevelPermission(user, valet.id);
  //     return await this.valetsService.update(args);
  //   } catch (error) {
  //     this.logger.error('Error in updateValet', error.stack);
  //     throw error;
  //   }
  // }

  // @AllowAuthenticated()
  // @Mutation(() => Valet)
  // async removeValet(
  //   @Args() args: FindUniqueValetArgs,
  //   @GetUser() user: GetUserType,
  // ): Promise<Valet> {
  //   this.logger.log(
  //     `removeValet called with args: ${JSON.stringify(args)} by user: ${user.id}`,
  //   );
  //   try {
  //     const valet = await this.prisma.valet.findUnique(args);
  //     checkRowLevelPermission(user, valet.id);
  //     return await this.valetsService.remove(args);
  //   } catch (error) {
  //     this.logger.error('Error in removeValet', error.stack);
  //     throw error;
  //   }
  // }

  // @ResolveField(() => User)
  // async user(@Parent() parent: Valet): Promise<User> {
  //   this.logger.log(`Resolving user for Valet ID: ${parent.id}`);
  //   try {
  //     return await this.prisma.user.findUnique({
  //       where: {
  //         id: parent.id,
  //       },
  //     });
  //   } catch (error) {
  //     this.logger.error('Error resolving user', error.stack);
  //     throw error;
  //   }
  // }

  // @ResolveField(() => Company)
  // async company(@Parent() parent: Valet): Promise<Company> {
  //   this.logger.log(`Resolving company for Valet ID: ${parent.id}`);
  //   try {
  //     return await this.prisma.company.findUnique({
  //       where: {
  //         id: parent.companyId,
  //       },
  //     });
  //   } catch (error) {
  //     this.logger.error('Error resolving company', error.stack);
  //     throw error;
  //   }
  // }

  // @ResolveField(() => [BookingTimeline])
  // async bookingTimelines(@Parent() parent: Valet): Promise<BookingTimeline[]> {
  //   this.logger.log(`Resolving booking timelines for Valet ID: ${parent.id}`);
  //   try {
  //     return await this.prisma.bookingTimeline.findMany({
  //       where: {
  //         valetId: parent.id,
  //       },
  //     });
  //   } catch (error) {
  //     this.logger.error('Error resolving booking timelines', error.stack);
  //     throw error;
  //   }
  // }

  // @ResolveField(() => [ValetAssignment])
  // async pickupValetAssignments(
  //   @Parent() parent: Valet,
  // ): Promise<ValetAssignment[]> {
  //   this.logger.log(`Resolving pickup valet assignments for Valet ID: ${parent.id}`);
  //   try {
  //     return await this.prisma.valetAssignment.findMany({
  //       where: {
  //         pickupValetId: parent.id,
  //       },
  //     });
  //   } catch (error) {
  //     this.logger.error('Error resolving pickup valet assignments', error.stack);
  //     throw error;
  //   }
  // }

  // @ResolveField(() => [ValetAssignment])
  // async returnValetAssignments(
  //   @Parent() parent: Valet,
  // ): Promise<ValetAssignment[]> {
  //   this.logger.log(`Resolving return valet assignments for Valet ID: ${parent.id}`);
  //   try {
  //     return await this.prisma.valetAssignment.findMany({
  //       where: {
  //         returnValetId: parent.id,
  //       },
  //     });
  //   } catch (error) {
  //     this.logger.error('Error resolving return valet assignments', error.stack);
  //     throw error;
  //   }
  // }
}
