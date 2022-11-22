import { MicroserviceNames, RmqService } from '@common/common';
import { INestMicroservice, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { UsersMicroserviceModule } from './users-microservice.module';

async function bootstrap() {
  const microservice_config_options_users = RmqService.getOptions(MicroserviceNames.USERS);

  const app = await NestFactory.create(UsersMicroserviceModule);
  
  app.connectMicroservice(microservice_config_options_users);
  
  await app.startAllMicroservices();
}
bootstrap();
