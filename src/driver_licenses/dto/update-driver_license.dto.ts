import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsNotEmpty, IsDateString } from 'class-validator';
import { CreateDriverLicenseDto } from './create-driver_license.dto';

export class UpdateDriverLicenseDto extends PartialType(CreateDriverLicenseDto) {
    
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    driver_id: number;

    @IsNumber()
    @IsNotEmpty()
    license_type_id: number;

    @IsDateString()
    @IsNotEmpty()
    expedition_date: Date;

    @IsDateString()
    @IsNotEmpty()
    expiration_date: Date;
}
