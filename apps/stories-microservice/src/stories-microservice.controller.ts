import { Controller, Get } from '@nestjs/common';
import { StoriesMicroserviceService } from './stories-microservice.service';

@Controller()
export class StoriesMicroserviceController {
  constructor(private readonly storiesMicroserviceService: StoriesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.storiesMicroserviceService.getHello();
  }
}
