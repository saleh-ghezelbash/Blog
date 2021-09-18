import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Rating } from './rating.entity';
import { RatingService } from './rating.service';

@Controller('rating')
export class RatingController {
    constructor(private readonly ratingService: RatingService) {}

//   @Post()
//   create(@Body() createRatingDto: CreateCategoryDto): Promise<Category> {
//     return this.ratingService.create(createCategoryDto);
//   }

  @Get()
  findAll(): Promise<Rating[]> {
    return this.ratingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Rating> {
    return this.ratingService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ratingService.remove(id);
  }
}
