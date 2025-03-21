import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMediumDto } from './dto/create-medium.dto';
import { UpdateMediumDto } from './dto/update-medium.dto';
import { Repository } from 'typeorm';
import { Medium } from 'src/database/entities/medium.entity';
import { connection } from 'src/database/database.module';

@Injectable()
export class MediumService {
  mediumsRepo: Repository<Medium>;
  constructor() {
    this.mediumsRepo = connection.getRepository(Medium);
  }
  async create(createMediumDto: CreateMediumDto) {
    try {
      const { name } = createMediumDto;
      const data = await this.mediumsRepo.save({ name });
      return {
        data,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating an institute',
        error,
      );
    }
  }

  async findAll() {
    try {
      const data = await this.mediumsRepo.find();
      return {
        data,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating an institute',
        error,
      );
    }
  }
}
