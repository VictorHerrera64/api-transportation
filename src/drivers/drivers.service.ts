import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
  // REPOSITORY'S CONSTRUCTOR
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}
// DRIVER'S CRUD
  create(createDriverDto: CreateDriverDto) {
    /*
    Function Create
    Params: A Driver.
    return: A Driver created.
    */
    const result = this.driverRepository.save(createDriverDto);
    return result;
  }

  findAll() {
  /*
    Function findAll
    return: All drivers
    */
    return this.driverRepository.find();
  }

  findOne(id: number) {
   /*
    Function findOne
    Param: A driver's id
    return: A driver with that id
    */
    return this.driverRepository.findOne(id);
  }

  async update(id: number, updateDriverDto: UpdateDriverDto) {
     /*
    Function update
    Param: A driver's id and that rider
    return: A driver with the information update
    */
    const result = await this.driverRepository.update(id, updateDriverDto)
    return result;
  }

  remove(id: number) {
     /*
    Function remove
    Param: A driver's id
    return: remove that driver
    */
    return this.driverRepository.delete(id);
  }
}
