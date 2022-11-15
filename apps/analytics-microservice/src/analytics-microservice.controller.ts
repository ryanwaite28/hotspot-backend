import { Controller, Get } from '@nestjs/common';
import { AnalyticsMicroserviceService } from './analytics-microservice.service';

@Controller()
export class AnalyticsMicroserviceController {
  constructor(private readonly analyticsMicroserviceService: AnalyticsMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.analyticsMicroserviceService.getHello();
  }
}
