import { IsInt, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class createProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @MinLength(0)
  price: number;
}
