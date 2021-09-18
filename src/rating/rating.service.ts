import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rating } from './rating.entity';

@Injectable()
export class RatingService {
    constructor(
        @InjectRepository(Rating)
        private ratingsRepository: Repository<Rating>,
      ) {}

      findAll(): Promise<Rating[]> {
        return this.ratingsRepository.find();
      }
    
      findOne(id: string): Promise<Rating> {
        return this.ratingsRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.ratingsRepository.delete(id);
      }
}
