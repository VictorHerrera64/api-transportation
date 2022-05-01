import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicenseTypesService } from './license_types.service';
import { CreateLicenseTypeDto } from './dto/create-license_type.dto';
import { UpdateLicenseTypeDto } from './dto/update-license_type.dto';

@Controller('license-types')
export class LicenseTypesController {
  constructor(private readonly licenseTypesService: LicenseTypesService) {}

  @Post()
  create(@Body() createLicenseTypeDto: CreateLicenseTypeDto) {
    return this.licenseTypesService.create(createLicenseTypeDto);
  }

  @Get()
  findAll() {
    return this.licenseTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licenseTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLicenseTypeDto: UpdateLicenseTypeDto) {
    return this.licenseTypesService.update(+id, updateLicenseTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licenseTypesService.remove(+id);
  }
}
