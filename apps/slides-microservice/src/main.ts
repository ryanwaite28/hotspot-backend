import { NestFactory } from '@nestjs/core';
import { SlidesMicroserviceModule } from './slides-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(SlidesMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
