import { Controller, Get } from '@nestjs/common';
import { RepliesMicroserviceService } from './replies-microservice.service';

@Controller()
export class RepliesMicroserviceController {
  constructor(private readonly repliesMicroserviceService: RepliesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.repliesMicroserviceService.getHello();
  }
}
