import { IsDate, IsEmail,IsEmpty} from "class-validator";

export class CreateUserDto {

    @IsEmpty()
    name: string;

    @IsEmpty()
    lastname: string;

    @IsEmail()
    @IsEmpty()
    email: string;

    @IsEmpty()
    password: string;

    @IsDate()
    @IsEmpty()
    birthday: Date;

    @IsDate()
    @IsEmpty()
    create_at: Date;
}
