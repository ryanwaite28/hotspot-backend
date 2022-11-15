import { NestFactory } from '@nestjs/core';
import { MessagesMicroserviceModule } from './messages-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(MessagesMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
