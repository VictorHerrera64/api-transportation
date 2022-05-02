import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLicenseTypeDto } from './dto/create-license_type.dto';
import { UpdateLicenseTypeDto } from './dto/update-license_type.dto';
import { LicenseType } from './entities/license_type.entity';

@Injectable()
export class LicenseTypesService {
   // REPOSITORY'S CONSTRUCTOR
   constructor(
    @InjectRepository(LicenseType)
    private licenseTypeRepository: Repository<LicenseType>,
  ) {}
// License Type'S CRUD
  create(createLicenseTypeDto: CreateLicenseTypeDto) {
    /*
    Function Create
    Params: A License Type
    return: A License Type created.
    */
    const result = this.licenseTypeRepository.save(createLicenseTypeDto);
    return result;
  }

  findAll() {
   /*
    Function findAll
    return: All License Type
    */
    return this.licenseTypeRepository.find();
  }

  findOne(id: number) {
    /*
    Function findOne
    Param: A License Type's id
    return: A License Type with that id
    */
    return this.licenseTypeRepository.findOne(id);
  }

  async update(id: number, updateLicenseTypeDto: UpdateLicenseTypeDto) {
    /*
    Function update
    Param: A license Type's id and that license Type
    return: A license Type with the information update
    */
    const result = await this.licenseTypeRepository.update(id, updateLicenseTypeDto)
    return result;
  }

  remove(id: number) {
     /*
    Function remove
    Param: A license Type's id
    return: remove that license Type
    */
    return this.licenseTypeRepository.delete(id);
  }
}
