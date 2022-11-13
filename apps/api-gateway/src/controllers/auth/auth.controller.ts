import { LoginUserDto, AuthMicroserviceMessages, MicroserviceNames } from '@common/common';
import { Body, Controller, Inject, Get, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(MicroserviceNames.AUTH) private authMicroserviceClient: ClientProxy,
  ) {}



  // routing to auth microservice

  @Get('ping-ms')
  pingMicroservice() {
    return this.authMicroserviceClient.send(AuthMicroserviceMessages.AUTH_MS_PING, {});
  }

  @Put()
  logIn(@Body() payload: LoginUserDto) {
    return this.authMicroserviceClient.send(AuthMicroserviceMessages.VALIDATE_USER_LOGIN, payload);
  }
}
