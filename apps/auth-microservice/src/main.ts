import { MicroserviceNames, RmqService } from '@common/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, RmqOptions } from '@nestjs/microservices';
import { AuthMicroserviceModule } from './auth-microservice.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthMicroserviceModule, RmqService.getOptions(MicroserviceNames.AUTH));
  app.useGlobalPipes(new ValidationPipe());
  await app.listen();
}
bootstrap();
