import { DriverLicense } from "src/driver_licenses/entities/driver_license.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LicenseType {
    @PrimaryGeneratedColumn({type:'int4'})
    id: number;

    @Column({type:'varchar'})
    description: string;

    @CreateDateColumn({type:'date'})
    create_at: Date;

    @CreateDateColumn({type:'date'})
    update_at: Date;

    @OneToMany(() => DriverLicense, (driverLicense) => driverLicense.licenseType,
    {
        eager:true
    })
    driverLicense: DriverLicense[];

}
