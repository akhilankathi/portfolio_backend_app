import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExperianceService } from './experiance.service';
import { CreateExperianceDto } from './dto/create-experiance.dto';
import { UpdateExperianceDto } from './dto/update-experiance.dto';

@Controller('experiance')
export class ExperianceController {
  constructor(private readonly experianceService: ExperianceService) {}

  @Post()
  create(@Body() createExperianceDto: CreateExperianceDto) {
    return this.experianceService.create(createExperianceDto);
  }

  @Get()
  findAll() {
    return this.experianceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.experianceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExperianceDto: UpdateExperianceDto) {
    return this.experianceService.update(+id, updateExperianceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.experianceService.remove(+id);
  }
}
