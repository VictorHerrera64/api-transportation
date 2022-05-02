import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
   // REPOSITORY'S CONSTRUCTOR
   constructor(
    @InjectRepository(Country)
    private countryRepository: Repository<Country>,
  ) {}

  // Country'S CRUD
  create(createCountryDto: CreateCountryDto) {
     /*
    Function Create
    Params: A Country.
    return: A Country created.
    */
    const result = this.countryRepository.save(createCountryDto);
    return result;
  }

  findAll() {
    /*
    Function findAll
    return: All countries
    */
    return this.countryRepository.find();
  }

  findOne(id: number) {
   /*
    Function findOne
    Param: A country's id
    return: A country with that id
    */
    return this.countryRepository.findOne(id);
  }

  async update(id: number, updateCountryDto: UpdateCountryDto) {
     /*
    Function update
    Param: A coumtry's id and that country
    return: A country with the information update
    */
    const result = await this.countryRepository.update(id, updateCountryDto)
    return result;
  }

  remove(id: number) {
  /*
    Function remove
    Param: A country's id
    return: remove that country
    */
    return this.countryRepository.delete(id);
  }
}
