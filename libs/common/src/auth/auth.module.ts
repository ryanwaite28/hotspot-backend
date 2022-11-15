import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MicroserviceNames } from '../enums/microservices/_microservices.enum';
import { RmqModule } from '../rmq/rmq.module';
import * as cookieParser from 'cookie-parser';
import { JwtAuthGuard } from './jwt.guard';

@Module({
  imports: [
    RmqModule.registerClients([
      MicroserviceNames.AUTH
    ])
  ],
  providers:[
    JwtAuthGuard
  ],
  exports: [
    RmqModule,
    JwtAuthGuard,
  ],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(cookieParser()).forRoutes('*');
  }
}