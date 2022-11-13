import { MicroserviceNames, RmqService } from '@common/common';
import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';
import { NotificationsMicroserviceModule } from './notifications-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(NotificationsMicroserviceModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions(MicroserviceNames.NOTIFICATIONS));
  await app.startAllMicroservices();
}
bootstrap();
