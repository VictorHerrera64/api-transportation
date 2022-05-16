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
import { TypeOrmModule } from '@nestjs/typeorm';
import { Country } from './countries/entities/country.entity';
import { DriverLicense } from './driver_licenses/entities/driver_license.entity';
import { Driver } from './drivers/entities/driver.entity';
import { LicenseType } from './license_types/entities/license_type.entity';
import { Rider } from './riders/entities/rider.entity';
import { User } from './users/entities/user.entity';
import { UsersAddress } from './users_address/entities/users_address.entity';
import { CityModule } from './city/city.module';
import { City } from './city/entities/city.entity';

@Module({
  imports: [RidersModule, UsersModule, 
    CountriesModule, UsersAddressModule, 
    DriversModule, LicenseTypesModule, 
    DriverLicensesModule,CityModule,
    TypeOrmModule.forRoot(
      {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'test',
      schema: 'public',
      entities: [Country,DriverLicense,Driver,
        LicenseType,Rider,User,
        UsersAddress,City],
        synchronize: true
    }) 
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
