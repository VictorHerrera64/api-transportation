import { Entity,Column, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

@Entity()
export class DriverLicense {
@PrimaryGeneratedColumn({type:'int4'})
id: number;

@Column({type:'int4'})
driver_id: number;

@Column({type:'int4'})
license_type: number;

@Column({type:'date'})
expedition_date: Date;

@Column({type:'date'})
expiration_date: Date;

@CreateDateColumn()
create_at: Date;

@CreateDateColumn()
update_at: Date;
}
