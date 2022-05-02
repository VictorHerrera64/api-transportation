import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    dat: Date;

    @CreateDateColumn()
    create_at: Date;
  
    @CreateDateColumn()
    update_at: Date;

}
