import { Controller, Get } from '@nestjs/common';
import { ConversationsMicroserviceService } from './conversations-microservice.service';

@Controller()
export class ConversationsMicroserviceController {
  constructor(private readonly conversationsMicroserviceService: ConversationsMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.conversationsMicroserviceService.getHello();
  }
}
