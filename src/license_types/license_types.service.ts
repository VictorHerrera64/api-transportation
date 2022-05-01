import { Injectable } from '@nestjs/common';
import { CreateLicenseTypeDto } from './dto/create-license_type.dto';
import { UpdateLicenseTypeDto } from './dto/update-license_type.dto';

@Injectable()
export class LicenseTypesService {
  create(createLicenseTypeDto: CreateLicenseTypeDto) {
    return 'This action adds a new licenseType';
  }

  findAll() {
    return `This action returns all licenseTypes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licenseType`;
  }

  update(id: number, updateLicenseTypeDto: UpdateLicenseTypeDto) {
    return `This action updates a #${id} licenseType`;
  }

  remove(id: number) {
    return `This action removes a #${id} licenseType`;
  }
}
