import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty, IsNumber, IsNotEmpty } from 'class-validator';
import { CreateUsersAddressDto } from './create-users_address.dto';

export class UpdateUsersAddressDto extends PartialType(CreateUsersAddressDto) {
    
    @IsNumber()
    @IsNotEmpty()
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
