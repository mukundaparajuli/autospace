import { Injectable } from '@nestjs/common';
import { FindUniqueValetAssignmentArgs } from './dtos/find.args';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateValetAssignmentInput } from './dtos/create-valet-assignment.input';
import { UpdateValetAssignmentInput } from './dtos/update-valet-assignment.input';

@Injectable()
export class ValetAssignmentsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createValetAssignmentInput: CreateValetAssignmentInput) {
    return this.prisma.valetAssignment.create({
      data: createValetAssignmentInput,
    });
  }

  findAll() {
    return this.prisma.valetAssignment.findMany();
  }

  findOne(args: FindUniqueValetAssignmentArgs) {
    return this.prisma.valetAssignment.findUnique(args);
  }

  update(updateValetAssignmentInput: UpdateValetAssignmentInput) {
    const { id, ...data } = updateValetAssignmentInput;
    return this.prisma.valetAssignment.update({
      where: { id },
      data: data,
    });
  }

  remove(args: FindUniqueValetAssignmentArgs) {
    return this.prisma.valetAssignment.delete(args);
  }
}
