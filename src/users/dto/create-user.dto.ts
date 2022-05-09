import { IsDate, IsEmail, isEmpty, IsEmpty, IsNumber } from "class-validator";

export class CreateUserDto {

    @IsNumber()
    @IsEmpty()
    id: number;

    @IsEmpty()
    name: string;

    @IsEmpty()
    middlename: string;

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
