import { NestFactory } from '@nestjs/core';
import { SocialnetworksMicroserviceModule } from './socialnetworks-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(SocialnetworksMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
