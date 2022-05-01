import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersAddressService } from './users_address.service';
import { CreateUsersAddressDto } from './dto/create-users_address.dto';
import { UpdateUsersAddressDto } from './dto/update-users_address.dto';

@Controller('users-address')
export class UsersAddressController {
  constructor(private readonly usersAddressService: UsersAddressService) {}

  @Post()
  create(@Body() createUsersAddressDto: CreateUsersAddressDto) {
    return this.usersAddressService.create(createUsersAddressDto);
  }

  @Get()
  findAll() {
    return this.usersAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersAddressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersAddressDto: UpdateUsersAddressDto) {
    return this.usersAddressService.update(+id, updateUsersAddressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersAddressService.remove(+id);
  }
}
