import { NestFactory } from '@nestjs/core';
import { UsersReportedMicroserviceModule } from './users-reported-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersReportedMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
