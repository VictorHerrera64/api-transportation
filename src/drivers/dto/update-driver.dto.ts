import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsNotEmpty } from 'class-validator';
import { CreateDriverDto } from './create-driver.dto';

export class UpdateDriverDto extends PartialType(CreateDriverDto) {
    
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;
}
