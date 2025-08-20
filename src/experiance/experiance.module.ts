import { Module } from '@nestjs/common';
import { ExperianceService } from './experiance.service';
import { ExperianceController } from './experiance.controller';

@Module({
  controllers: [ExperianceController],
  providers: [ExperianceService],
})
export class ExperianceModule {}
