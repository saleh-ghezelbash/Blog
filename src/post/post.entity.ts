import { Category } from 'src/category/category.entity';
import { Comment } from 'src/comment/comment.entity';
import { Tag } from 'src/tag/tag.entity';
import { User } from 'src/user/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany, JoinColumn, JoinTable } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    slug: string;

    @Column()
    content: string;

    @Column()
    ratingsAverage: number;

    @Column()
    imageCover: string;

    @Column()
    createdAt: Date;

    @Column()
    modifiedAt: Date;

    @ManyToOne(() => Category, category => category.posts)
    category: Category;

    @ManyToOne(() => User, user => user.posts)
    user: User;

    @ManyToMany(() => Tag, tag => tag.posts)
    @JoinTable({ name: 'post_tag' })
    tags: Tag[];

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    // چون decorator column ندارد در دیتابیس ذخیره نمی شود ولی در خروجی نمایش داده میشود
    commentCount?: number;
}