import { Test, TestingModule } from '@nestjs/testing';
import { LicenseTypesService } from './license_types.service';

describe('LicenseTypesService', () => {
  let service: LicenseTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicenseTypesService],
    }).compile();

    service = module.get<LicenseTypesService>(LicenseTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
