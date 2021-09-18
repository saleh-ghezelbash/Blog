import { Controller, Delete, Get, Param } from '@nestjs/common';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
    constructor(private readonly tagService: TagService) {}

    //   @Post()
    //   create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    //     return this.tagService.create(createCategoryDto);
    //   }
    
      @Get()
      findAll(): Promise<Tag[]> {
        return this.tagService.findAll();
      }
    
      @Get(':id')
      findOne(@Param('id') id: string): Promise<Tag> {
        return this.tagService.findOne(id);
      }
    
      @Delete(':id')
      remove(@Param('id') id: string): Promise<void> {
        return this.tagService.remove(id);
      }
}
