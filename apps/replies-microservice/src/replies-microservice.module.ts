import { Module } from '@nestjs/common';
import { RepliesMicroserviceController } from './replies-microservice.controller';
import { RepliesMicroserviceService } from './replies-microservice.service';

@Module({
  imports: [],
  controllers: [RepliesMicroserviceController],
  providers: [RepliesMicroserviceService],
})
export class RepliesMicroserviceModule {}
