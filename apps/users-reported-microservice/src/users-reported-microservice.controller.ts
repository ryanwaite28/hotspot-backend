import { Controller, Get } from '@nestjs/common';
import { UsersReportedMicroserviceService } from './users-reported-microservice.service';

@Controller()
export class UsersReportedMicroserviceController {
  constructor(private readonly usersReportedMicroserviceService: UsersReportedMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.usersReportedMicroserviceService.getHello();
  }
}
