import { Test, TestingModule } from '@nestjs/testing';
import { ExperianceService } from './experiance.service';

describe('ExperianceService', () => {
  let service: ExperianceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExperianceService],
    }).compile();

    service = module.get<ExperianceService>(ExperianceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
