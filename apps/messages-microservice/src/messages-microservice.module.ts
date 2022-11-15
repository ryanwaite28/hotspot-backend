import { Module } from '@nestjs/common';
import { MessagesMicroserviceController } from './messages-microservice.controller';
import { MessagesMicroserviceService } from './messages-microservice.service';

@Module({
  imports: [],
  controllers: [MessagesMicroserviceController],
  providers: [MessagesMicroserviceService],
})
export class MessagesMicroserviceModule {}
