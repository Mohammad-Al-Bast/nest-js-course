import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

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
  age: number;
}

export class updateUserDto {
  @IsString()
  name?: string;
  @IsEmail()
  email?: string;
  @IsInt()
  age?: number;
}

export class User {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @Min(8)
  password: string;
  @IsString()
  major: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
