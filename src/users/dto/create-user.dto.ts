import { IsDateString, IsEmail,IsEmpty,IsNotEmpty} from "class-validator";

export class CreateUserDto {

    @IsEmpty()
    id:number;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    lastname: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsDateString()
    @IsNotEmpty()
    birthday: Date;



}
