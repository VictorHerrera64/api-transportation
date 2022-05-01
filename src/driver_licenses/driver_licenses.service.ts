import { Injectable } from '@nestjs/common';
import { CreateDriverLicenseDto } from './dto/create-driver_license.dto';
import { UpdateDriverLicenseDto } from './dto/update-driver_license.dto';

@Injectable()
export class DriverLicensesService {
  create(createDriverLicenseDto: CreateDriverLicenseDto) {
    return 'This action adds a new driverLicense';
  }

  findAll() {
    return `This action returns all driverLicenses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} driverLicense`;
  }

  update(id: number, updateDriverLicenseDto: UpdateDriverLicenseDto) {
    return `This action updates a #${id} driverLicense`;
  }

  remove(id: number) {
    return `This action removes a #${id} driverLicense`;
  }
}
