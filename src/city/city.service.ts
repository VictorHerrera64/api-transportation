import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
   // REPOSITORY'S CONSTRUCTOR
   constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}
  // CITY'S CRUD

  create(createCityDto: CreateCityDto) {
     /*
    Function Create
    Params: A city.
    return: A rider created.
    */
    const result = this.cityRepository.save(createCityDto);
    return result;
  }

  findAll() {
    /*
    Function findAll
    return: All cities
    */
    return this.cityRepository.find();
  }

  findOne(id: number) {
    /*
    Function findOne
    Param: A city's id
    return: A city with that id
    */
    return this.cityRepository.findOne(id);
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    /*
    Function update
    Param: A city's id and that city
    return: A city with the information update
    */
    const result = await this.cityRepository.update(id, updateCityDto)
    return result;
  }

  remove(id: number) {
      /*
    Function remove
    Param: A city's id
    return: remove that city
    */
    return this.cityRepository.delete(id);
  }
}
