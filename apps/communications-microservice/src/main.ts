import { NestFactory } from '@nestjs/core';
import { CommunicationsMicroserviceModule } from './communications-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(CommunicationsMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
