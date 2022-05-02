import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class City {
    @PrimaryGeneratedColumn({type:'int4'})
    id: number;

    @Column({type:'int4'})
    country_id: number;

    @Column({
        type:'varchar',
        length: 150
    })
    name: string;

    @CreateDateColumn()
    create_at: Date;
  
    @CreateDateColumn()
    update_at: Date;
}
