import { connection } from './../../database/database.module';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { Repository } from 'typeorm';
import { InstitutionType } from 'src/database/entities/institution.type.entity';

@Injectable()
export class InstitutionService {
  institutionRepo: Repository<InstitutionType>;
  constructor() {
    this.institutionRepo = connection.getRepository(InstitutionType);
  }
  async create(createInstitutionDto: CreateInstitutionDto) {
    const { name } = createInstitutionDto;

    try {
      const data = await this.institutionRepo.save({ name });
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
      const data = await this.institutionRepo.find({ relations: ['boards'] });
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

  findOne(id: number) {
    return `This action returns a #${id} institution`;
  }

  update(id: number, updateInstitutionDto: UpdateInstitutionDto) {
    return `This action updates a #${id} institution`;
  }

  remove(id: number) {
    return `This action removes a #${id} institution`;
  }
}
