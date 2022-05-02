import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @CreateDateColumn()
    create_at: Date;
  
    @CreateDateColumn()
    update_at: Date;
}
