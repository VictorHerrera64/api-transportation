import { Driver } from "src/drivers/entities/driver.entity";
import { LicenseType } from "src/license_types/entities/license_type.entity";
import { Entity,Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn} from "typeorm";

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

@CreateDateColumn({type:'date'})
create_at: Date;

@CreateDateColumn({type:'date'})
update_at: Date;

@ManyToOne(() => Driver, (driver) => driver.driverLicense)
@JoinColumn({name:'driver_id'})
driver: Driver;

@ManyToOne(() => LicenseType, (licenseType) => licenseType.driverLicense)
@JoinColumn({name:'license_type_id'})
licenseType: LicenseType;

}
