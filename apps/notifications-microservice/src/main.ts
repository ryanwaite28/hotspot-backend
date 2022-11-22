import { MicroserviceNames, RmqService } from '@common/common';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NotificationsMicroserviceModule } from './notifications-microservice.module';

async function bootstrap() {
  const microservice_config_options_notifications = RmqService.getOptions(MicroserviceNames.NOTIFICATIONS);
  const microservice_config_options_users = RmqService.getOptions(MicroserviceNames.USERS);

  const app = await NestFactory.create(NotificationsMicroserviceModule);
  app.useGlobalPipes(new ValidationPipe());

  app.connectMicroservice(microservice_config_options_notifications);
  // app.connectMicroservice(microservice_config_options_users);
  
  await app.startAllMicroservices();
}
bootstrap();
