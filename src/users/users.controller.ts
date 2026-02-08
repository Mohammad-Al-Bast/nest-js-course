import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserDto, createUserDto, updateUserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
  private users: UserDto[] = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
    {
      id: 3,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      age: 28,
    },
  ];
  @Get()
  getAllUsers(@Query('name') name: string) {
    if (name) {
      return this.users.filter((user) => user.name == name);
    }
    return this.users;
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    const user = this.users.find((user) => user.id === Number(id));
    if (!user) {
      throw new NotFoundException();
    }
    return user;
  }

  @Post()
  createUser(@Body() createUserDto: createUserDto) {
    const newUser: UserDto = {
      id: this.users.length + 1,
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  @Patch(':id')
  updateUser(@Param('id') id: number, @Body() updateUserDto: updateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === Number(id));
    if (!this.users[userIndex]) {
      throw new NotFoundException();
    }
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
    return this.users[userIndex];
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number, @Body() body: updateUserDto) {
    const userIndex = this.users.findIndex((user) => user.id === Number(id));
    if (!this.users[userIndex]) {
      throw new NotFoundException();
    }
    this.users[userIndex].name = body.name || this.users[userIndex].name;
    this.users[userIndex].email = body.email || this.users[userIndex].email;
    this.users[userIndex].age = body.age || this.users[userIndex].age;
    this.users.splice(userIndex, 1);
    return { message: 'User deleted successfully' };
  }
}
