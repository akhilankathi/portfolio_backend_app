import { Test, TestingModule } from '@nestjs/testing';
import { ExperianceController } from './experiance.controller';
import { ExperianceService } from './experiance.service';

describe('ExperianceController', () => {
  let controller: ExperianceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExperianceController],
      providers: [ExperianceService],
    }).compile();

    controller = module.get<ExperianceController>(ExperianceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
