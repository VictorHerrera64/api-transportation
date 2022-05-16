import { User } from "src/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rider {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @CreateDateColumn({type:'date'})
    create_at: Date;
  
    @CreateDateColumn({type:'date'})
    update_at: Date;

    @OneToOne(() => User, (user) => user.rider)
    @JoinColumn({name:'user_id'})
    user: User;
}
