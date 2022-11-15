import { Module } from '@nestjs/common';
import { ConversationsMicroserviceController } from './conversations-microservice.controller';
import { ConversationsMicroserviceService } from './conversations-microservice.service';

@Module({
  imports: [],
  controllers: [ConversationsMicroserviceController],
  providers: [ConversationsMicroserviceService],
})
export class ConversationsMicroserviceModule {}
