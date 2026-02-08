import { IsInt, IsOptional, IsString, Min } from 'class-validator';

export class updateProductDto {
  @IsString()
  @IsOptional()
  @Min(1)
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt()
  @IsOptional()
  @Min(0)
  price: number;
}
