import { Test, TestingModule } from '@nestjs/testing';
import { UsersAddressController } from './users_address.controller';
import { UsersAddressService } from './users_address.service';

describe('UsersAddressController', () => {
  let controller: UsersAddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersAddressController],
      providers: [UsersAddressService],
    }).compile();

    controller = module.get<UsersAddressController>(UsersAddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
