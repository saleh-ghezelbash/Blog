import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rating {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    rating: number;

    @Column()
    createdAt: Date;

//   @OneToMany(type => post, post => post.category)
//   posts: Post[];

//   @OneToMany(type => user, user => user.rating)
//   users: User[];
}