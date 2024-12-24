import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';

import { PrismaService } from 'src/common/prisma/prisma.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateValetAssignment } from './dtos/create.dto';
import { ValetAssignmentQueryDto } from './dtos/query.dto';
import { UpdateValetAssignment } from './dtos/update.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { GetUserType } from 'src/common/types';
import { checkRowLevelPermission } from 'src/common/auth/util';
import { ValetAssignmentEntity } from './entity/valet-assignment.entity';

@ApiTags('valet-assignments')
@Controller('valet-assignments')
export class ValetAssignmentsController {
  constructor(private readonly prisma: PrismaService) { }

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ValetAssignmentEntity })
  @Post()
  create(
    @Body() createValetAssignmentDto: CreateValetAssignment,
    @GetUser() user: GetUserType,
  ) {
    checkRowLevelPermission(user, createValetAssignmentDto.id);
    return this.prisma.valetAssignment.create({
      data: createValetAssignmentDto,
    });
  }

  @ApiOkResponse({ type: [ValetAssignmentEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: ValetAssignmentQueryDto) {
    return this.prisma.valetAssignment.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    });
  }

  @ApiOkResponse({ type: ValetAssignmentEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.valetAssignment.findUnique({ where: { id } });
  }

  @ApiOkResponse({ type: ValetAssignmentEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateValetAssignmentDto: UpdateValetAssignment,
    @GetUser() user: GetUserType,
  ) {
    const valetAssignment = await this.prisma.valetAssignment.findUnique({
      where: { id },
    });
    checkRowLevelPermission(user, valetAssignment.id);
    return this.prisma.valetAssignment.update({
      where: { id },
      data: updateValetAssignmentDto,
    });
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const valetAssignment = await this.prisma.valetAssignment.findUnique({
      where: { id },
    });
    checkRowLevelPermission(user, valetAssignment.id);
    return this.prisma.valetAssignment.delete({ where: { id } });
  }
}
