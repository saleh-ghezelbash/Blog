import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './tag.entity';

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag)
        private tagsRepository: Repository<Tag>,
      ) {}

      findAll(): Promise<Tag[]> {
        return this.tagsRepository.find();
      }
    
      findOne(id: string): Promise<Tag> {
        return this.tagsRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.tagsRepository.delete(id);
      }
}
