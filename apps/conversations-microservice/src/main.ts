import { NestFactory } from '@nestjs/core';
import { ConversationsMicroserviceModule } from './conversations-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(ConversationsMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
