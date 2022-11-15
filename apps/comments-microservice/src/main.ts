import { NestFactory } from '@nestjs/core';
import { CommentsMicroserviceModule } from './comments-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(CommentsMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
