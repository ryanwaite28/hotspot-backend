import { Module } from '@nestjs/common';
import { SlidesMicroserviceController } from './slides-microservice.controller';
import { SlidesMicroserviceService } from './slides-microservice.service';

@Module({
  imports: [],
  controllers: [SlidesMicroserviceController],
  providers: [SlidesMicroserviceService],
})
export class SlidesMicroserviceModule {}
