import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RidersModule } from './riders/riders.module';
import { UsersModule } from './users/users.module';
import { CountriesModule } from './countries/countries.module';
import { UsersAddressModule } from './users_address/users_address.module';
import { DriversModule } from './drivers/drivers.module';
import { LicenseTypesModule } from './license_types/license_types.module';
import { DriverLicensesModule } from './driver_licenses/driver_licenses.module';

@Module({
  imports: [RidersModule, UsersModule, CountriesModule, UsersAddressModule, DriversModule, LicenseTypesModule, DriverLicensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
