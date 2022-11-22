import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WebApiGatewayModule } from './web-api-gateway.module';


async function bootstrap() {
  const app = await NestFactory.create(WebApiGatewayModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: process.env.CORS_ORIGINS.split(','),
    credentials: true,
  });
  await app.listen(process.env.PORT);
}
bootstrap();
