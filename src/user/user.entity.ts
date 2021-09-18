import { Exclude, Expose } from 'class-transformer';
import { Post } from 'src/post/post.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

export enum UserRoleEnum{
    Admin='ادمین',
    User='کاربر',
    Publisher='نویسنده'
}

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column('enum',{enum:UserRoleEnum,default:UserRoleEnum.User})
    @Exclude()
    role:UserRoleEnum;

    @OneToMany(() => Post,(post) => post.user)
    posts:Post[]
}

