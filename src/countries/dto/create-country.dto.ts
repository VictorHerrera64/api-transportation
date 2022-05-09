import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreateCountryDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    description: string;

    @IsDate()
    @IsNotEmpty()
    create_at: Date;
}
