import { NestFactory } from '@nestjs/core';
import { RepliesMicroserviceModule } from './replies-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(RepliesMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
