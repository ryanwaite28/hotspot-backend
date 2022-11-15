import { NestFactory } from '@nestjs/core';
import { StoriesMicroserviceModule } from './stories-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(StoriesMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
