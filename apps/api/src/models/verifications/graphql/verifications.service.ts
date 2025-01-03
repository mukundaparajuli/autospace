import { Injectable } from '@nestjs/common';
import { FindUniqueVerificationArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateVerificationInput } from './dtos/create-verification.input';
import { UpdateVerificationInput } from './dtos/update-verification.input';

@Injectable()
export class VerificationsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createVerificationInput: CreateVerificationInput) {
    return this.prisma.verification.create({
      data: createVerificationInput,
    });
  }

  findAll() {
    return this.prisma.verification.findMany();
  }

  findOne(args: FindUniqueVerificationArgs) {
    return this.prisma.verification.findUnique(args);
  }

  update(updateVerificationInput: UpdateVerificationInput) {
    const { id, ...data } = updateVerificationInput;
    return this.prisma.verification.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueVerificationArgs) {
    return this.prisma.verification.delete(args);
  }
}
