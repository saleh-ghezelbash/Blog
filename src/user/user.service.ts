import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

      findAll(): Promise<User[]> {
        return this.usersRepository.find();
      }
    
      findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
      }

      
      create(createUserDto:CreateUserDto): Promise<User> {
        return this.usersRepository.save(createUserDto)
      }
    
      async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
      }
}