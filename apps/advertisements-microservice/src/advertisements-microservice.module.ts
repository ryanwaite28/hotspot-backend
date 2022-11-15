import { Module } from '@nestjs/common';
import { AdvertisementsMicroserviceController } from './advertisements-microservice.controller';
import { AdvertisementsMicroserviceService } from './advertisements-microservice.service';

@Module({
  imports: [],
  controllers: [AdvertisementsMicroserviceController],
  providers: [AdvertisementsMicroserviceService],
})
export class AdvertisementsMicroserviceModule {}
