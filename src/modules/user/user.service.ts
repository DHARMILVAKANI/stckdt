import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto, UserResponseDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from 'src/database/entities/user.entity';
import { connection } from 'src/database/database.module';

@Injectable()
export class UserService {
  userRepo: Repository<User>;
  constructor() {
    this.userRepo = connection.getRepository(User);
  }
  async create(createUserDto: CreateUserDto) {
    const {
      firstName,
      lastName,
      address,
      phoneNumber,
      boardId,
      categoryId,
      istitutionTypeId,
      mediumId,
    } = createUserDto;
    try {
      const data = await this.userRepo.save({
        firstName,
        lastName,
        phoneNumber,
        address,
        board: { id: boardId },
        institutionType: { id: istitutionTypeId },
        category: { id: categoryId },
        medium: { id: mediumId },
      });
      return {
        data,
      };
    } catch (error) {
      throw new InternalServerErrorException(
        'Error while creating an user',
        error,
      );
    }
  }

  async findOne(id: string) {
    const data = await this.userRepo.findOne({
      where: { id },
      relations: ['category', 'institutionType', 'board', 'medium'],
    });
    return {
      data: new UserResponseDto(data),
    };
  }
}
