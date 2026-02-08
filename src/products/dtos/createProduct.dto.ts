import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  @MinLength(0)
  price: number;
}
