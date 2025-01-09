import { PartialType } from '@nestjs/swagger';
import { CreateRandomDto } from './create-random.dto';

export class UpdateRandomDto extends PartialType(CreateRandomDto) {}
