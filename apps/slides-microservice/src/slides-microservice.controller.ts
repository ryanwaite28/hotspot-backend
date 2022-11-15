import { Controller, Get } from '@nestjs/common';
import { SlidesMicroserviceService } from './slides-microservice.service';

@Controller()
export class SlidesMicroserviceController {
  constructor(private readonly slidesMicroserviceService: SlidesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.slidesMicroserviceService.getHello();
  }
}
