import { Module } from '@nestjs/common';
import { DriverLicensesService } from './driver_licenses.service';
import { DriverLicensesController } from './driver_licenses.controller';

@Module({
  controllers: [DriverLicensesController],
  providers: [DriverLicensesService]
})
export class DriverLicensesModule {}
