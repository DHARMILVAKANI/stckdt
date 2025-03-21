import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { Boards } from 'src/database/entities/boards.entity';
import { Category } from 'src/database/entities/category.entity';
import { InstitutionType } from 'src/database/entities/institution.type.entity';
import { Medium } from 'src/database/entities/medium.entity';
import { User } from 'src/database/entities/user.entity';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  categoryId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  istitutionTypeId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  mediumId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  boardId: string;
}

export class UserResponseDto {
  @ApiProperty({ type: 'varchar' })
  firstName: string;

  @ApiProperty({ type: 'varchar' })
  lastName: string;

  @ApiProperty({ type: 'varchar' })
  phoneNumber: string;

  @ApiProperty({ type: 'text' })
  address: string;

  @ApiProperty()
  category: Category;

  @ApiProperty()
  institutionType: InstitutionType;

  @ApiProperty()
  board: Boards;

  @ApiProperty()
  medium: Medium;
  constructor(data: User) {
    console.log(data);
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.phoneNumber = data.phoneNumber;
    this.address = data.address;
    this.category = data.category;
    this.institutionType = data.institutionType;
    this.board = data.board;
    this.medium = data.medium;
  }
}
