import { NestFactory } from '@nestjs/core';
import { AdvertisementsMicroserviceModule } from './advertisements-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(AdvertisementsMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
