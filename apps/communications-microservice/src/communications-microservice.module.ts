import { Module } from '@nestjs/common';
import { CommunicationsMicroserviceController } from './communications-microservice.controller';
import { CommunicationsMicroserviceService } from './communications-microservice.service';

@Module({
  imports: [],
  controllers: [CommunicationsMicroserviceController],
  providers: [CommunicationsMicroserviceService],
})
export class CommunicationsMicroserviceModule {}
