import { IsDate, IsEmpty, IsNotEmpty, IsNumber } from "class-validator";

export class CreateUsersAddressDto {
    
    @IsEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;

    @IsNumber()
    @IsNotEmpty()
    city_id: number;

    @IsNotEmpty() 
    address: string;

    @IsNotEmpty()
    description: string;

    @IsNotEmpty()
    zipcode: string;

}
