import { IsDate, IsEmpty, IsNumber} from "class-validator";

export class CreateDriverDto {
    @IsNumber()
    @IsEmpty()
    id: number;

    @IsNumber()
    @IsEmpty()
    user_id: number;

    @IsDate()
    @IsEmpty()
    create_at: Date;
}
