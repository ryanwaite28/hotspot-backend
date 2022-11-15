import { Controller, Get } from '@nestjs/common';
import { LivestreamsMicroserviceService } from './livestreams-microservice.service';

@Controller()
export class LivestreamsMicroserviceController {
  constructor(private readonly livestreamsMicroserviceService: LivestreamsMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.livestreamsMicroserviceService.getHello();
  }
}
