import { NestFactory } from '@nestjs/core';
import { CliquesMicroserviceModule } from './cliques-microservice.module';

async function bootstrap() {
  const app = await NestFactory.create(CliquesMicroserviceModule);
  await app.listen(3000);
}
bootstrap();
