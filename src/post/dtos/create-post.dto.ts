import { IsEmail, IsString,IsNumber,Max,Min, Length } from "class-validator";

export class CreatePostDto{
    @Length(2,200,
        {
            message:"تعداد کاراکتر برای عنوان پست بین 2 و 200 می باشد",
            // groups:['create','update']
        })
    title: string;

    content:string;

}