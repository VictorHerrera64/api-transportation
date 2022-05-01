import { Module } from '@nestjs/common';
import { LicenseTypesService } from './license_types.service';
import { LicenseTypesController } from './license_types.controller';

@Module({
  controllers: [LicenseTypesController],
  providers: [LicenseTypesService]
})
export class LicenseTypesModule {}
