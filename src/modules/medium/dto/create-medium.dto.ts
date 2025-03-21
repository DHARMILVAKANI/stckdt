import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateMediumDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
