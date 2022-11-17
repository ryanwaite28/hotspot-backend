import { MicroserviceNames, RmqService } from '@common/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, RmqOptions } from '@nestjs/microservices';
import { NotificationsMicroserviceModule } from './notifications-microservice.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(NotificationsMicroserviceModule, RmqService.getOptions(MicroserviceNames.NOTIFICATIONS));
  await app.listen();
}
bootstrap();
