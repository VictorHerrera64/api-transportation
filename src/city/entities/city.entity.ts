import { Country } from "src/countries/entities/country.entity";
import { UsersAddress } from "src/users_address/entities/users_address.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;
    
    @Column({ type: 'int4' })
    country_id: number;
    
    @Column({
        type: 'varchar',
        length: 150
    })
    name: string;

    @CreateDateColumn({ type: 'date' })
    create_at: Date;

    @CreateDateColumn({ type: 'date' })
    update_at: Date;

    @ManyToOne(() => Country, (country) => country.cities)
    @JoinColumn({ name: 'country_id'})
    country: Country;
    
    @OneToMany(() => UsersAddress, (usersAddress) => usersAddress.city, 
    {
        eager: true
    })
    usersAddress: UsersAddress[];
    
}
