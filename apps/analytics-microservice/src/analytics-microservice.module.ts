import { Module } from '@nestjs/common';
import { AnalyticsMicroserviceController } from './analytics-microservice.controller';
import { AnalyticsMicroserviceService } from './analytics-microservice.service';

@Module({
  imports: [],
  controllers: [AnalyticsMicroserviceController],
  providers: [AnalyticsMicroserviceService],
})
export class AnalyticsMicroserviceModule {}
