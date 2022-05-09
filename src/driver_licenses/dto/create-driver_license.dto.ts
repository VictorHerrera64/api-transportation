import { IsDate, IsEmpty, IsNumber } from "class-validator";

export class CreateDriverLicenseDto {

    @IsNumber()
    @IsEmpty()
    id: number;

    @IsNumber()
    @IsEmpty()
    driver_id: number;

    @IsNumber()
    @IsEmpty()
    license_type_id: number;

    @IsDate()
    @IsEmpty()
    expedition_date: Date;

    @IsDate()
    @IsEmpty()
    expiration_date: Date;

    @IsDate()
    @IsEmpty()
    create_at: Date;

    
    




  
}
