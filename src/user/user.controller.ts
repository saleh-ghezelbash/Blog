import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

     
    
      @Get()
      findAll(): Promise<User[]> {
        return this.userService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string): Promise<User> {
        return this.userService.findOne(id);
      }

      @Post()
      create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string): Promise<void> {
        return this.userService.remove(id);
      }
}
