import {IsDateString, IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCityDto {

    @IsEmpty()
    id: number;

    @IsNotEmpty()
    name: string;

}
