import { PartialType } from '@nestjs/mapped-types';
import { IsDateString, IsEmail,IsNotEmpty, IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    @IsNumber()
    @IsNotEmpty()
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
