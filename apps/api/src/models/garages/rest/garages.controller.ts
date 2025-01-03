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
import { CreateGarage } from './dtos/create.dto';
import { GarageQueryDto } from './dtos/query.dto';
import { UpdateGarage } from './dtos/update.dto';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { GarageEntity } from './entity/garage.entity';
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator';
import { GetUserType } from 'src/common/types';
import { checkRowLevelPermission } from 'src/common/auth/util';

@ApiTags('garages')
@Controller('garages')
export class GaragesController {
  constructor(private readonly prisma: PrismaService) {}

  @AllowAuthenticated()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: GarageEntity })
  @Post()
  create(@Body() createGarageDto: CreateGarage, @GetUser() user: GetUserType) {
    checkRowLevelPermission(user, createGarageDto.id);
    return this.prisma.garage.create({ data: createGarageDto });
  }

  @ApiOkResponse({ type: [GarageEntity] })
  @Get()
  findAll(@Query() { skip, take, order, sortBy }: GarageQueryDto) {
    return this.prisma.garage.findMany({
      ...(skip ? { skip: +skip } : null),
      ...(take ? { take: +take } : null),
      ...(sortBy ? { orderBy: { [sortBy]: order || 'asc' } } : null),
    });
  }

  @ApiOkResponse({ type: GarageEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prisma.garage.findUnique({ where: { id } });
  }

  @ApiOkResponse({ type: GarageEntity })
  @ApiBearerAuth()
  @AllowAuthenticated()
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateGarageDto: UpdateGarage,
    @GetUser() user: GetUserType,
  ) {
    const garage = await this.prisma.garage.findUnique({ where: { id } });
    checkRowLevelPermission(user, garage.id);
    return this.prisma.garage.update({
      where: { id },
      data: updateGarageDto,
    });
  }

  @ApiBearerAuth()
  @AllowAuthenticated()
  @Delete(':id')
  async remove(@Param('id') id: string, @GetUser() user: GetUserType) {
    const garage = await this.prisma.garage.findUnique({ where: { id } });
    checkRowLevelPermission(user, garage.id);
    return this.prisma.garage.delete({ where: { id } });
  }
}
