import { MicroserviceNames, RmqService } from '@common/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, RmqOptions } from '@nestjs/microservices';
import { UsersMicroserviceModule } from './users-microservice.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(UsersMicroserviceModule, RmqService.getOptions(MicroserviceNames.USERS));
  await app.listen();
}
bootstrap();
