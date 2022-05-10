import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => User, (user) => user.id)
    user: User;
}
