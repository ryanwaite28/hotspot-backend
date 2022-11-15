import { Controller, Get } from '@nestjs/common';
import { AdvertisementsMicroserviceService } from './advertisements-microservice.service';

@Controller()
export class AdvertisementsMicroserviceController {
  constructor(private readonly advertisementsMicroserviceService: AdvertisementsMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.advertisementsMicroserviceService.getHello();
  }
}
