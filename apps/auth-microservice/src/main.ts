import { MicroserviceNames, RmqService } from '@common/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, RmqOptions } from '@nestjs/microservices';
import { AuthMicroserviceModule } from './auth-microservice.module';

async function bootstrap() {
  const microservice_config_options_auth = RmqService.getOptions(MicroserviceNames.AUTH);
  const microservice_config_options_users = RmqService.getOptions(MicroserviceNames.USERS);

  const app = await NestFactory.create(AuthMicroserviceModule);
  app.useGlobalPipes(new ValidationPipe());

  const ms_auth = app.connectMicroservice(microservice_config_options_auth);

  await app.startAllMicroservices();
}
bootstrap();
