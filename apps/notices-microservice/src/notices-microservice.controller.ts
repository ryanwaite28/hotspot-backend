import { Controller, Get } from '@nestjs/common';
import { NoticesMicroserviceService } from './notices-microservice.service';

@Controller()
export class NoticesMicroserviceController {
  constructor(private readonly noticesMicroserviceService: NoticesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.noticesMicroserviceService.getHello();
  }
}
