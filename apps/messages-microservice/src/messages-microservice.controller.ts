import { Controller, Get } from '@nestjs/common';
import { MessagesMicroserviceService } from './messages-microservice.service';

@Controller()
export class MessagesMicroserviceController {
  constructor(private readonly messagesMicroserviceService: MessagesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.messagesMicroserviceService.getHello();
  }
}
