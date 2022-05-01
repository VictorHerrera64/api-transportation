import { Module } from '@nestjs/common';
import { UsersAddressService } from './users_address.service';
import { UsersAddressController } from './users_address.controller';

@Module({
  controllers: [UsersAddressController],
  providers: [UsersAddressService]
})
export class UsersAddressModule {}
