import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MobileApiGatewayModule } from './mobile-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(MobileApiGatewayModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT);
}
bootstrap();