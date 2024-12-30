import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateAdminInput } from './dtos/create-admin.input';
import { UpdateAdminInput } from './dtos/update-admin.input';
import { FindUniqueAdminArgs } from './dtos/find.args';

@Injectable()
export class AdminsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAdminInput: CreateAdminInput) {
    return this.prisma.admin.create({
      data: createAdminInput,
    });
  }

  findAll() {
    return this.prisma.admin.findMany();
  }

  findOne(args: FindUniqueAdminArgs) {
    return this.prisma.admin.findUnique(args);
  }

  update(updateAdminInput: UpdateAdminInput) {
    const { id, ...data } = updateAdminInput;
    return this.prisma.admin.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueAdminArgs) {
    return this.prisma.admin.delete(args);
  }
}
