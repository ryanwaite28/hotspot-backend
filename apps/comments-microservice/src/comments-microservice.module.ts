import { Module } from '@nestjs/common';
import { CommentsMicroserviceController } from './comments-microservice.controller';
import { CommentsMicroserviceService } from './comments-microservice.service';

@Module({
  imports: [],
  controllers: [CommentsMicroserviceController],
  providers: [CommentsMicroserviceService],
})
export class CommentsMicroserviceModule {}
