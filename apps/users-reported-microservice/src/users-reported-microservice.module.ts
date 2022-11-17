import { Module } from '@nestjs/common';
import { UsersReportedMicroserviceController } from './users-reported-microservice.controller';
import { UsersReportedMicroserviceService } from './users-reported-microservice.service';

@Module({
  imports: [],
  controllers: [UsersReportedMicroserviceController],
  providers: [UsersReportedMicroserviceService],
})
export class UsersReportedMicroserviceModule {}
