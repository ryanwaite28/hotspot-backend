import { NestFactory } from '@nestjs/core';
import { NoticesMicroserviceModule } from './notices-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(NoticesMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
