import { MicroserviceNames, RmqService } from '@common/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RmqOptions } from '@nestjs/microservices';
import { AuthMicroserviceModule } from './auth-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthMicroserviceModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions(MicroserviceNames.AUTH));
  app.connectMicroservice<RmqOptions>(rmqService.getOptions(MicroserviceNames.USERS));
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
}
bootstrap();
