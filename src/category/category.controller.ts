import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post } from '@nestjs/common';
// import { CreateCategoryDto } from './dto/create-Category.dto';
import { Category } from './Category.entity';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  create(@Body() category): Promise<Category> {
    return this.categoryService.create(category.title);
  }
  // @Post()
  // create(@Body() createCategoryDto:CreateCategoryDto): Promise<Category> {
  //   return this.categoryService.create(createCategoryDto);
  // }

  @Get()
  findAll(): Promise<Category[]> {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',new ParseIntPipe()) id):Promise<Category> {    
    return this.categoryService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id',ParseIntPipe) id: string): Promise<void> {
    return this.categoryService.remove(id);
  }
}