import { Driver } from "src/drivers/entities/driver.entity";
import { Rider } from "src/riders/entities/rider.entity";
import { UsersAddress } from "src/users_address/entities/users_address.entity";
import { Column, CreateDateColumn,Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({type:'int4'})
    id: number;

    @Column({
        type:'varchar',
        length:150
    })
    name: string;

    @Column({
        nullable: true,
        type:'varchar',
        length:150
    })
    middlename: string;

    @Column({
        type:'varchar',
        length:150
    })
    lastname: string;

    @Column({
        type:'varchar',
        length:150
    })
    email: string;

    @Column({
        type:'varchar',
        length:10
    })
    password: string;

    @Column({type:'date'})
    birthday: Date;

    @CreateDateColumn({type:'date'})
    create_at: Date;
  
    @CreateDateColumn({type:'date'})
    update_at: Date;

    @OneToOne(() => Rider, (rider) => rider.user,
    {
        eager:true,
        cascade:true
    })
    rider: Rider;

    @OneToMany(() => UsersAddress, (usersAddress) => usersAddress.user,
    {
        eager: true
    })
    usersAddress: UsersAddress[];

    @OneToOne(() => Driver, (driver) => driver.user,
    {
        eager:true
    })
    driver: Driver;
    
}
