import { MicroserviceNames, RmqService } from '@common/common';
import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';
import { UsersMicroserviceModule } from './users-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersMicroserviceModule);
  const rmqService = app.get<RmqService>(RmqService);

  /* 
    https://docs.nestjs.com/microservices/basics

    The `connectMicroservice` method on the NestJS application (the app variable) registers a listener to a messaging queue/broker
  */
  app.connectMicroservice<RmqOptions>(rmqService.getOptions(MicroserviceNames.USERS));

  // start all microservice listeners
  await app.startAllMicroservices();
}
bootstrap();
