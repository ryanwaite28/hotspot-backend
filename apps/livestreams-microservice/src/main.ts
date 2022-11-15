import { NestFactory } from '@nestjs/core';
import { LivestreamsMicroserviceModule } from './livestreams-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(LivestreamsMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
