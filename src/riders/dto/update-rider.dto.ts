import { PartialType } from '@nestjs/mapped-types';
import { IsEmpty, IsNotEmpty, IsNumber } from 'class-validator';
import { CreateRiderDto } from './create-rider.dto';

export class UpdateRiderDto extends PartialType(CreateRiderDto) {
    
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    user_id: number;
}
