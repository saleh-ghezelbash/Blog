import { Module } from '@nestjs/common';
import { TestModule } from './test/test.module';
import { CategoryModule } from './category/category.module';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { RatingModule } from './rating/rating.module';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Category } from './category/category.entity';
import { Tag } from './tag/tag.entity';
import { Rating } from './rating/rating.entity';
import { Comment } from './comment/comment.entity';
import { User } from './user/user.entity';
import { Post } from './post/post.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog',
      synchronize: true,
      entities:[Category,Tag,Rating,Comment,User,Post]
  }),TestModule, CategoryModule, TagModule, UserModule, PostModule, CommentModule, RatingModule]
})
export class AppModule {}
