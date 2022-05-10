import {IsDateString, IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCountryDto {
    @IsEmpty()
    id: number;

    @IsNotEmpty()
    description: string;

}
