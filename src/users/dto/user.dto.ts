import { IsEmail, IsInt, IsNumber, IsString, max, min } from 'class-validator';

export class UserDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsInt()
  age: number;
}

export class createUserDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsInt()
  @min(0)
  @max(80)
  age: number;
}

export class updateUserDto {
  @IsString()
  name?: string;
  @IsEmail()
  email?: string;
  @IsInt()
  @min(0)
  @max(80)
  age?: number;
}
