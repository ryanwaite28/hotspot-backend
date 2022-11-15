import { Module } from '@nestjs/common';
import { NoticesMicroserviceController } from './notices-microservice.controller';
import { NoticesMicroserviceService } from './notices-microservice.service';

@Module({
  imports: [],
  controllers: [NoticesMicroserviceController],
  providers: [NoticesMicroserviceService],
})
export class NoticesMicroserviceModule {}
