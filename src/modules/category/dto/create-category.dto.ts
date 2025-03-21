import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsArray()
  standards: string[];
}
