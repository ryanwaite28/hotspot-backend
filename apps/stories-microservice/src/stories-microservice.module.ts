import { Module } from '@nestjs/common';
import { StoriesMicroserviceController } from './stories-microservice.controller';
import { StoriesMicroserviceService } from './stories-microservice.service';

@Module({
  imports: [],
  controllers: [StoriesMicroserviceController],
  providers: [StoriesMicroserviceService],
})
export class StoriesMicroserviceModule {}
