import { Module } from '@nestjs/common';
import { DriverLicensesService } from './driver_licenses.service';
import { DriverLicensesController } from './driver_licenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DriverLicense } from './entities/driver_license.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DriverLicense])],
  controllers: [DriverLicensesController],
  providers: [DriverLicensesService]
})
export class DriverLicensesModule {}
