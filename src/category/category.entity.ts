import { Post } from 'src/post/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, Unique } from 'typeorm';

@Entity()
// @Unique(['title'])
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique:true,
    // name:'topic',
    // length:100
  })
  title: string;

  @OneToMany(() => Post, (post) => post.category)
  posts: Post[];

}