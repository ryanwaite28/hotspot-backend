import { NestFactory } from '@nestjs/core';
import { AnalyticsMicroserviceModule } from './analytics-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(AnalyticsMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
