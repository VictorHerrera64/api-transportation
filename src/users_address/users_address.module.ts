import { Module } from '@nestjs/common';
import { UsersAddressService } from './users_address.service';
import { UsersAddressController } from './users_address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersAddress } from './entities/users_address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsersAddress])],
  controllers: [UsersAddressController],
  providers: [UsersAddressService]
})
export class UsersAddressModule {}
