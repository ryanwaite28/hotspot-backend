import { Module } from '@nestjs/common';
import { SocialnetworksMicroserviceController } from './socialnetworks-microservice.controller';
import { SocialnetworksMicroserviceService } from './socialnetworks-microservice.service';

@Module({
  imports: [],
  controllers: [SocialnetworksMicroserviceController],
  providers: [SocialnetworksMicroserviceService],
})
export class SocialnetworksMicroserviceModule {}
