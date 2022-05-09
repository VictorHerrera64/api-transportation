import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCityDto {

    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    country_id: number;

    @IsNotEmpty()
    name: string;

    @IsDate()
    @IsNotEmpty()
    create_at: Date;

}
