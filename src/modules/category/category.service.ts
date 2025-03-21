import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { Category } from 'src/database/entities/category.entity';
import { connection } from 'src/database/database.module';

@Injectable()
export class CategoryService {
  categoryRepo: Repository<Category>;
  constructor() {
    this.categoryRepo = connection.getRepository(Category);
  }
  async create(createCategoryDto: CreateCategoryDto) {
    const { name, standards } = createCategoryDto;

    try {
      const data = await this.categoryRepo.save({ name, standards });
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
      const data = await this.categoryRepo.find();
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

  async findTheStandards(id: string) {
    const data = await this.categoryRepo.findOne({
      where: { id },
    });

    return { data };
  }
}
