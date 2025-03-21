import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { Repository } from 'typeorm';
import { Boards } from 'src/database/entities/boards.entity';
import { connection } from 'src/database/database.module';

@Injectable()
export class BoardsService {
  boardRepo: Repository<Boards>;
  constructor() {
    this.boardRepo = connection.getRepository(Boards);
  }
  async create(createBoardDto: CreateBoardDto) {
    try {
      const { name } = createBoardDto;
      const data = await this.boardRepo.save({ name });
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating an institute',
        error,
      );
    }
  }

  async findAll() {
    try {
      const data = await this.boardRepo.find();
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

  async findOne(id: string) {
    const data = await this.boardRepo.findOne({
      where: { institution: { id } },
    });

    return { data };
  }
}
