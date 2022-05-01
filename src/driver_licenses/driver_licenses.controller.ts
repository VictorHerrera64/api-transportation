import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DriverLicensesService } from './driver_licenses.service';
import { CreateDriverLicenseDto } from './dto/create-driver_license.dto';
import { UpdateDriverLicenseDto } from './dto/update-driver_license.dto';

@Controller('driver-licenses')
export class DriverLicensesController {
  constructor(private readonly driverLicensesService: DriverLicensesService) {}

  @Post()
  create(@Body() createDriverLicenseDto: CreateDriverLicenseDto) {
    return this.driverLicensesService.create(createDriverLicenseDto);
  }

  @Get()
  findAll() {
    return this.driverLicensesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverLicensesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverLicenseDto: UpdateDriverLicenseDto) {
    return this.driverLicensesService.update(+id, updateDriverLicenseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverLicensesService.remove(+id);
  }
}
