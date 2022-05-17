import { DriverLicense } from "src/driver_licenses/entities/driver_license.entity";
import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn({type:'int4'})
    id: number;

    @Column({
        type:'int4',
        unique: true
    })
    user_id: number;

    @CreateDateColumn({type:'date'})
    create_at: Date;

    @CreateDateColumn({type:'date'})
    update_at: Date;

    @OneToOne(() => User, (user) => user.driver)
    @JoinColumn({name:'user_id'})
    user: User;

    @OneToMany(() => DriverLicense, (driverLicense) => driverLicense.driver_id)
    driverLicense: DriverLicense[];

    
}
