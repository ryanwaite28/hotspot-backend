import { Module } from '@nestjs/common';
import { UsersSuspendedMicroserviceController } from './users-suspended-microservice.controller';
import { UsersSuspendedMicroserviceService } from './users-suspended-microservice.service';

@Module({
  imports: [],
  controllers: [UsersSuspendedMicroserviceController],
  providers: [UsersSuspendedMicroserviceService],
})
export class UsersSuspendedMicroserviceModule {}
