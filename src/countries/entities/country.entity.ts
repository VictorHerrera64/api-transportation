import { City } from 'src/city/entities/city.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
@Entity()
export class Country {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @CreateDateColumn()
  create_at: Date;

  @CreateDateColumn()
  update_at: Date;

  @OneToMany(() => City, (city) => city.country_id, {eager: true})
  city: City[];
}