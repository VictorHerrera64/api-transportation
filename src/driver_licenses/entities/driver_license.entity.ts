import { Driver } from "src/drivers/entities/driver.entity";
import { LicenseType } from "src/license_types/entities/license_type.entity";
import { Entity,Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne} from "typeorm";

@Entity()
export class DriverLicense {
@PrimaryGeneratedColumn({type:'int4'})
id: number;

@Column({type:'int4'})
driver_id: number;

@Column({type:'int4'})
license_type_id: number;

@Column({type:'date'})
expedition_date: Date;

@Column({type:'date'})
expiration_date: Date;

@CreateDateColumn()
create_at: Date;

@CreateDateColumn()
update_at: Date;

@ManyToOne(() => Driver, (driver) => driver.id, {eager: true})
driver: Driver;

@ManyToOne(() => LicenseType, (licenseType) => licenseType.id, {eager: true})
licenseType: LicenseType;

}
