import {IsEmpty, IsNotEmpty, IsNumber} from "class-validator";

export class CreateDriverDto {
    
    @IsEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    
}
