import {IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateRiderDto {
    @IsEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;
}
