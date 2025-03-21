import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MediumService } from './medium.service';
import { CreateMediumDto } from './dto/create-medium.dto';
import { UpdateMediumDto } from './dto/update-medium.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Medium')
@Controller('medium')
export class MediumController {
  constructor(private readonly mediumService: MediumService) {}

  @Post()
  create(@Body() createMediumDto: CreateMediumDto) {
    return this.mediumService.create(createMediumDto);
  }

  @Get()
  findAll() {
    return this.mediumService.findAll();
  }
}
