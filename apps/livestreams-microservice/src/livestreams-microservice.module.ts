import { Module } from '@nestjs/common';
import { LivestreamsMicroserviceController } from './livestreams-microservice.controller';
import { LivestreamsMicroserviceService } from './livestreams-microservice.service';

@Module({
  imports: [],
  controllers: [LivestreamsMicroserviceController],
  providers: [LivestreamsMicroserviceService],
})
export class LivestreamsMicroserviceModule {}
