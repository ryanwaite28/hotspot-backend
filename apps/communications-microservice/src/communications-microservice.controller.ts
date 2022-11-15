import { Controller, Get } from '@nestjs/common';
import { CommunicationsMicroserviceService } from './communications-microservice.service';

@Controller()
export class CommunicationsMicroserviceController {
  constructor(private readonly communicationsMicroserviceService: CommunicationsMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.communicationsMicroserviceService.getHello();
  }
}
