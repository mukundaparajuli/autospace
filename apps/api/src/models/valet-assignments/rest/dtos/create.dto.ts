import { PickType } from '@nestjs/swagger';
import { ValetAssignmentEntity } from '../entity/valet-assignment.entity';

export class CreateValetAssignment extends PickType(ValetAssignmentEntity, [
  'id',
  'bookingId',
]) {}
