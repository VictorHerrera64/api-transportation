import {IsEmpty, IsNotEmpty} from "class-validator";

export class CreateLicenseTypeDto {
    
    @IsEmpty()
    id: number;

    @IsNotEmpty()
    description:string;

    
}
