import { Injectable } from '@nestjs/common';
import { FindManyValetArgs, FindUniqueValetArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateValetInput } from './dtos/create-valet.input';
import { UpdateValetInput } from './dtos/update-valet.input';

@Injectable()
export class ValetsService {
  constructor(private readonly prisma: PrismaService) { }
  // create(createValetInput: CreateValetInput) {
  //   return this.prisma.valet.create({
  //     data: createValetInput,
  //   });
  // }

  findAll(args: FindManyValetArgs) {
    return this.prisma.valet.findMany(args as any);
  }

  findOne(args: FindUniqueValetArgs) {
    return this.prisma.valet.findUnique(args);
  }

  // update(updateValetInput: UpdateValetInput) {
  //   const { id, ...data } = updateValetInput;
  //   return this.prisma.valet.update({
  //     where: { id },
  //     data: data,
  //   });
  // }

  // remove(args: FindUniqueValetArgs) {
  //   return this.prisma.valet.delete(args);
  // }
}
