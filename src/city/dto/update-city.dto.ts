import { PartialType } from '@nestjs/mapped-types';
import {IsNotEmpty, IsNumber } from 'class-validator';
import { CreateCityDto } from './create-city.dto';

export class UpdateCityDto extends PartialType(CreateCityDto) {
    
    @IsNumber()
    @IsNotEmpty()
    id: number;


    @IsNotEmpty()
    country_id: number;

    @IsNotEmpty()
    name: string;
}
