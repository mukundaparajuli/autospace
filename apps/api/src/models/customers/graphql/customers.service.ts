import { Injectable } from '@nestjs/common';
import { FindUniqueCustomerArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateCustomerInput } from './dtos/create-customer.input';
import { UpdateCustomerInput } from './dtos/update-customer.input';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCustomerInput: CreateCustomerInput) {
    return this.prisma.customer.create({
      data: createCustomerInput,
    });
  }

  findAll() {
    return this.prisma.customer.findMany();
  }

  findOne(args: FindUniqueCustomerArgs) {
    return this.prisma.customer.findUnique(args);
  }

  update(updateCustomerInput: UpdateCustomerInput) {
    const { id, ...data } = updateCustomerInput;
    return this.prisma.customer.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueCustomerArgs) {
    return this.prisma.customer.delete(args);
  }
}
