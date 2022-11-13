import { Module } from '@nestjs/common';
import { ApiGatewayController } from './api-gateway.controller';
import { ApiGatewayService } from './api-gateway.service';
import { UsersController } from './controllers/users/users.controller';
import { AuthController } from './controllers/auth/auth.controller';
import { HttpModule } from '@nestjs/axios';
import { CommonLibraryModule, MicroserviceNames, RmqModule } from '@common/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CommonLibraryModule,
    HttpModule,
    ConfigModule,

    RmqModule.registerClients([
      MicroserviceNames.AUTH,
      MicroserviceNames.USERS,
      MicroserviceNames.NOTIFICATIONS,
    ]),
  ],
  controllers: [
    ApiGatewayController,
    UsersController,
    AuthController,
  ],
  providers: [
    ApiGatewayService
  ],
})
export class ApiGatewayModule {}
