import {IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateLicenseTypeDto {
    
    @IsEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    
}
