import {IsDateString, IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCityDto {

    @IsEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    country_id: number;

    @IsNotEmpty()
    name: string;

}
