import { MicroserviceNames, RmqService } from '@common/common';
import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { UsersMicroserviceModule } from './users-microservice.module';

async function bootstrap() {
  const rabbitMqMicroserviceOptions: MicroserviceOptions = RmqService.getOptions(MicroserviceNames.USERS);
  const app: INestMicroservice = await NestFactory.createMicroservice<MicroserviceOptions>(UsersMicroserviceModule, rabbitMqMicroserviceOptions);
  await app.listen();
}
bootstrap();
