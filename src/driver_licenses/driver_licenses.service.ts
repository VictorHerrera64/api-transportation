import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDriverLicenseDto } from './dto/create-driver_license.dto';
import { UpdateDriverLicenseDto } from './dto/update-driver_license.dto';
import { DriverLicense } from './entities/driver_license.entity';

@Injectable()
export class DriverLicensesService {
   // REPOSITORY'S CONSTRUCTOR
   constructor(
    @InjectRepository(DriverLicense)
    private driverLicenseRepository: Repository<DriverLicense>,
  ) {}
  // DRIVER LICENSE'S CRUD
  create(createDriverLicenseDto: CreateDriverLicenseDto) {
    /*
    Function Create
    Params: A DRIVER LICENSE.
    return: A DRIVER LICENSE created.
    */
    const result = this.driverLicenseRepository.save(createDriverLicenseDto);
    return result;
  }

  findAll() {
    /*
    Function findAll
    return: All driver License
    */
    return this.driverLicenseRepository.find();
  }

  findOne(id: number) {
     /*
    Function findOne
    Param: A driver License's id
    return: A driver License with that id
    */
    return this.driverLicenseRepository.findOne(id);
  }

  async update(id: number, updateDriverLicenseDto: UpdateDriverLicenseDto) {
     /*
    Function update
    Param: A driver License's id and that driver License
    return: A driver License with the information update
    */
    const result = await this.driverLicenseRepository.update(id, updateDriverLicenseDto)
    return result;
  }

  remove(id: number) {
         /*
    Function remove
    Param: A driver License's id
    return: remove that driver License
    */
    return this.driverLicenseRepository.delete(id);
  }
}
