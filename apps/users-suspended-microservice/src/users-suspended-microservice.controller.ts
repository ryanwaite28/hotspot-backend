import { Controller, Get } from '@nestjs/common';
import { UsersSuspendedMicroserviceService } from './users-suspended-microservice.service';

@Controller()
export class UsersSuspendedMicroserviceController {
  constructor(private readonly usersSuspendedMicroserviceService: UsersSuspendedMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.usersSuspendedMicroserviceService.getHello();
  }
}
