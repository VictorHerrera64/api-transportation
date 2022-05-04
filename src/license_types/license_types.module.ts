import { Module } from '@nestjs/common';
import { LicenseTypesService } from './license_types.service';
import { LicenseTypesController } from './license_types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenseType } from './entities/license_type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LicenseType])],
  controllers: [LicenseTypesController],
  providers: [LicenseTypesService]
})
export class LicenseTypesModule {}
