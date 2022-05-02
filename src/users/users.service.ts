import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
   // REPOSITORY'S CONSTRUCTOR
   constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  // USER'S CRUD
  create(createUserDto: CreateUserDto) {
    /*
    Function Create
    Params: An user.
    return: An user created.
    */
    const result = this.userRepository.save(createUserDto);
    return result;
  }

  findAll() {
     /*
    Function findAll
    return: All users
    */
    return this.userRepository.find();
  }

  findOne(id: number) {
     /*
    Function findOne
    Param: An user's id
    return: An user with that id
    */
    return this.userRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
     /*
    Function update
    Param: An user's id and that user
    return: An user with the information update
    */
    const result = await this.userRepository.update(id,updateUserDto)
    return result;
  }

  remove(id: number) {
     /*
    Function remove
    Param: An user's id
    return: remove that user
    */
    return this.userRepository.delete(id);
  }
}
