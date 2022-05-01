import { Test, TestingModule } from '@nestjs/testing';
import { LicenseTypesController } from './license_types.controller';
import { LicenseTypesService } from './license_types.service';

describe('LicenseTypesController', () => {
  let controller: LicenseTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicenseTypesController],
      providers: [LicenseTypesService],
    }).compile();

    controller = module.get<LicenseTypesController>(LicenseTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
