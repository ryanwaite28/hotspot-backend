import { LoginUserDto, AuthMicroserviceMessages, MicroserviceNames, ServiceMethodResults } from '@common/common';
import { Body, Controller, Inject, Get, Put, HttpException, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(MicroserviceNames.AUTH) private authMicroserviceClient: ClientProxy,
  ) {}



  // routing to auth microservice

  @Get('ping-ms')
  pingMicroservice() {
    return this.authMicroserviceClient.send(AuthMicroserviceMessages.AUTH_MS_PING, {}).pipe(
      map((results: ServiceMethodResults) => {
        if (results.error) {
          throw new HttpException(results.info, results.status);
        }
        return results.info;
      })
    );
  }

  @Post()
  logIn(@Body() payload: LoginUserDto) {
    return this.authMicroserviceClient.send(AuthMicroserviceMessages.VALIDATE_USER_LOGIN, payload).pipe(
      map((results: ServiceMethodResults) => {
        if (results.error) {
          throw new HttpException(results.info, results.status);
        }
        return results.info;
      })
    );
  }
}
