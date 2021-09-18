import { Post } from "src/post/post.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @Column()
    createdAt: Date;

    @ManyToOne(() => Post,post => post.comments)
    post: Post;

//   @OneToMany(type => user, user => user.rating)
//   users: User[];
}