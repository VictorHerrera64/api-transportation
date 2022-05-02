import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersAddressDto } from './dto/create-users_address.dto';
import { UpdateUsersAddressDto } from './dto/update-users_address.dto';
import { UsersAddress } from './entities/users_address.entity';

@Injectable()
export class UsersAddressService {
   // REPOSITORY'S CONSTRUCTOR
   constructor(
    @InjectRepository(UsersAddress)
    private userAddressRepository: Repository<UsersAddress>,
  ) {}
  // USER address'S CRUD
  create(createUsersAddressDto: CreateUsersAddressDto) {
   /*
    Function Create
    Params: An user address.
    return: An user address created.
    */
   const result = this.userAddressRepository.save(createUsersAddressDto);
   return result
  }

  findAll() {
      /*
    Function findAll
    return: All user address
    */
    return this.userAddressRepository.find();
  }

  findOne(id: number) {
    /*
    Function findOne
    Param: An user address's id
    return: An userddress with that id
    */
    return this.userAddressRepository.findOne(id);
  }

  async update(id: number, updateUsersAddressDto: UpdateUsersAddressDto) {
      /*
    Function update
    Param: An user address's id and that user address
    return: An user address with the information update
    */
    const result = await this.userAddressRepository.update(id,updateUsersAddressDto)
    return result;
  }

  remove(id: number) {
     /*
    Function remove
    Param: An user address's id
    return: remove that user address
    */
    return this.userAddressRepository.delete(id);
  }
}
