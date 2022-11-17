import { NestFactory } from '@nestjs/core';
import { UsersSuspendedMicroserviceModule } from './users-suspended-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersSuspendedMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
