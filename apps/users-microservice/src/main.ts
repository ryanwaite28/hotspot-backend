import { MicroserviceNames, RmqService } from '@common/common';
import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';
import { UsersMicroserviceModule } from './users-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersMicroserviceModule);
  const rmqService = app.get<RmqService>(RmqService);

  // listen to microservice queue for messages/events
  app.connectMicroservice<RmqOptions>(rmqService.getOptions(MicroserviceNames.USERS));

  await app.startAllMicroservices();
}
bootstrap();
