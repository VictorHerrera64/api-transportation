import { PartialType } from '@nestjs/mapped-types';
import {IsNotEmpty, IsNumber} from 'class-validator';
import { CreateCountryDto } from './create-country.dto';

export class UpdateCountryDto extends PartialType(CreateCountryDto) {
    
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    description: string;
}
