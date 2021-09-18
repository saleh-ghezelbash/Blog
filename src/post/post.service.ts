import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dtos/create-post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) { }

  public getPostsWithCommentCountQuery() // این متد یک کوئری قابل استفاده در بقیه متدها و کوئری های دیگر است
  {
    return this.postsRepository.createQueryBuilder('post')
      // تعداد کامنت های هر پست را تولید  میکند
      .loadRelationCountAndMap('post.commentCount', 'post.comments')
  }

  async findAll(): Promise<Post[]> {
    return this.postsRepository.find();

    // return this.postsRepository.find({
    //   relations:['category','comments']
    // });

    // return this.postsRepository.find({
    //   // where:{
    //   //   id:MoreThan(id), //id و createdAt باهم and شده اند
    //   //   createdAt:MoreThan(new Date('2020-03-04T13:20:05'))
    //   // }

    //   // where:[
    //   //   {id:3},//id و createdAt باهم or شده اند
    //   //   {createdAt:Date.now}
    //   // ]

    //   // where:{description:Like('%تست%')}
    //   // order:{id:'DESC'}
    //   // take:2
    //   // select:['id','title']
    // });

    // return await this.postsRepository.createQueryBuilder('post')
    //   .orderBy('post.createdAt', 'DESC')
    //   .getMany();

    // return await this.getPostsWithCommentCountQuery()
    //   .orderBy('post.createdAt', 'DESC')
    //   .getMany();
  }

  async findOne(id: string): Promise<Post> {
    return this.postsRepository.findOne(id);

    // return await this.postsRepository.createQueryBuilder('post')
    // .andWhere('post.id = :id',{id})
    // .getOne()
  }

  async create(
    createPostDto: CreatePostDto,
    // user: User
  ): Promise<Post> {
    const post = await this.postsRepository.create(createPostDto);
    // post.user = user;
    return this.postsRepository.save(post);
  }

  async remove(id: string): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
