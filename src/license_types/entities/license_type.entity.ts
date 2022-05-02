import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LicenseType {
    @PrimaryGeneratedColumn({type:'int4'})
    id: number;

    @Column({type:'varchar'})
    descripcion: string;

    @CreateDateColumn()
    create_at: Date;

    @CreateDateColumn()
    update_at: Date;


}
