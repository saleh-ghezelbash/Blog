import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from 'src/user/user.entity';
import { CreatePostDto } from './dtos/create-post.dto';
import { Post as MyPost } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) { }

  // @UsePipes(new ValidationPipe({groups:['create']}))
  @Post()
  create(
    @Body(
      // ValidationPipe
    ) createPostDto: CreatePostDto,
    // @CurrentUser() user: User
  ): Promise<MyPost> {
    return this.postService.create(
      createPostDto
      // , user
    );
  }

  @Get()
  findAll(): Promise<MyPost[]> {
    console.log('test');
    
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MyPost> {
    return this.postService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.postService.remove(id);
  }
}
