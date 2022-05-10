import { City } from "src/city/entities/city.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UsersAddress {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ type: 'int4' })
    user_id: number;

    @Column({ type: 'int4' })
    city_id: number;

    @Column({
        type: 'varchar',
        length: 150
    })
    address: string;

    @Column({
        type: 'varchar',
        length: 150
    })
    description: string;

    @Column({
        type: 'varchar',
        length: 150
    })
    zipcode: string;

    @ManyToOne(() => City, (city) => city.id)
    city: City;

    @ManyToOne(() => User, (user) => user.id)
    user: User;
}



