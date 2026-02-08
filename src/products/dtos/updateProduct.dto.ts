import { IsNumber, IsOptional, IsString, MinLength } from 'class-validator';

export class updateProductDto {
  @IsString()
  @IsOptional()
  @MinLength(1)
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsOptional()
  @MinLength(0)
  price: number;
}
