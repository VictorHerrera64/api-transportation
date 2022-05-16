import { City } from 'src/city/entities/city.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinColumn } from 'typeorm';
@Entity()
export class Country {
@PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @CreateDateColumn({type:'date'})
  create_at: Date;

  @CreateDateColumn({type:'date'})
  update_at: Date;
 
  @OneToMany(() => City, (city) => city.country)
  @JoinColumn({name:'country_id'})
  cities: City[];
  
}