import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { CreateLicenseTypeDto } from './create-license_type.dto';

export class UpdateLicenseTypeDto extends PartialType(CreateLicenseTypeDto) {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    description:string;
}
