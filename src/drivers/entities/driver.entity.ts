import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Driver {
    @PrimaryGeneratedColumn({type:'int4'})
    id: number;

    @Column({
        type:'int4',
        unique: true
    })
    user_id: number;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;
}
