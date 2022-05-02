import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRiderDto } from './dto/create-rider.dto';
import { UpdateRiderDto } from './dto/update-rider.dto';
import { Rider } from './entities/rider.entity';

@Injectable()
export class RidersService {
  // REPOSITORY'S CONSTRUCTOR
  constructor(
    @InjectRepository(Rider)
    private riderRepository: Repository<Rider>,
  ) {}
// RIDERS'S CRUD
  create(createRiderDto: CreateRiderDto) {
    /*
    Function Create
    Params: A rider.
    return: A rider created.
    */
    const result = this.riderRepository.save(createRiderDto);
    return result;
  }

  findAll() {
    /*
    Function findAll
    return: All riders
    */
    return this.riderRepository.find();
  }

  findOne(id: number) {
    /*
    Function findOne
    Param: A rider's id
    return: A rider with that id
    */
    return this.riderRepository.findOne(id);
  }

  async update(id: number, updateRiderDto: UpdateRiderDto) {
     /*
    Function update
    Param: A rider's id and that rider
    return: A rider with the information update
    */
    const result = await this.riderRepository.update(id, updateRiderDto)
    return result;
  }

  remove(id: number) {
     /*
    Function remove
    Param: A rider's id
    return: remove that rider
    */
    return this.riderRepository.delete(id);
  }
}
