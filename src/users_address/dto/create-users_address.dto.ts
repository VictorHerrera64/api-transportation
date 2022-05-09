import { IsDate, IsEmpty, IsNumber } from "class-validator";

export class CreateUsersAddressDto {
    @IsNumber()
    @IsEmpty()
    id: number;

    @IsNumber()
    @IsEmpty()
    user_id: number;

    @IsNumber()
    @IsEmpty()
    city_id: number;

    @IsEmpty() 
    address: string;

    @IsEmpty() 
    description: string;

    @IsEmpty() 
    zipcode: string;

}
