import { Injectable } from '@nestjs/common';
import { FindUniqueGarageArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateGarageInput } from './dtos/create-garage.input';
import { UpdateGarageInput } from './dtos/update-garage.input';

@Injectable()
export class GaragesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGarageInput: CreateGarageInput) {
    return this.prisma.garage.create({
      data: createGarageInput,
    });
  }

  findAll() {
    return this.prisma.garage.findMany();
  }

  findOne(args: FindUniqueGarageArgs) {
    return this.prisma.garage.findUnique(args);
  }

  update(updateGarageInput: UpdateGarageInput) {
    const { id, ...data } = updateGarageInput;
    return this.prisma.garage.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueGarageArgs) {
    return this.prisma.garage.delete(args);
  }
}
