import { Controller, Get } from '@nestjs/common';
import { SocialnetworksMicroserviceService } from './socialnetworks-microservice.service';

@Controller()
export class SocialnetworksMicroserviceController {
  constructor(private readonly socialnetworksMicroserviceService: SocialnetworksMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.socialnetworksMicroserviceService.getHello();
  }
}
