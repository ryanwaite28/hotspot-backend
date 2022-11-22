import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './database/user.entity';
import { UsersRepository } from './database/user.repo';
import { JwtService } from '@nestjs/jwt';
import { AuthMicroserviceEvents, HttpStatusCode, LoginUserDto, MicroserviceNames, RmqService, ServiceMethodAsyncResults, ServiceMethodResults } from '@common/common';
import * as bcrypt from 'bcrypt-nodejs';
import { ClientProxy, RmqContext } from '@nestjs/microservices';



@Injectable()
export class AuthMicroserviceService {
  constructor (
    @Inject(MicroserviceNames.AUTH) private authMicroserviceClient: ClientProxy,
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
    private rmqService: RmqService
  ) {}

  ping(context: RmqContext) {
    this.rmqService.ack(context);
    // this.authMicroserviceClient.emit(AuthMicroserviceEvents.AUTH_MS_PINGED, {});
    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        message: `AuthMicroserviceService Pinged`
      }
    };
    return serviceMethodResults; 
  }

  createUser(data: UserEntity, context: RmqContext) {
    const user = this.usersRepository.save(data);
    this.rmqService.ack(context);
    return user;
  }

  updateUser(data: UserEntity, context: RmqContext) {
    const user = this.usersRepository.save(data);
    this.rmqService.ack(context);
    return user;
  }

  async validateUserLogin(data: LoginUserDto, context: RmqContext): ServiceMethodAsyncResults<string> {
    const check = await this.usersRepository.findOneByEmail(data.email_or_username) || await this.usersRepository.findOneByUsername(data.email_or_username);
    if (!check) {
      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.BAD_REQUEST,
        error: true,
        info: {
          message: `Invalid credentials.`
        }
      };
      return serviceMethodResults;
    }

    const badPassword = bcrypt.compareSync(data.password, check.password) === false;
    if (badPassword) {
      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.UNAUTHORIZED,
        error: true,
        info: {
          message: 'Invalid credentials.'
        }
      };
      return serviceMethodResults;
    }

    this.rmqService.ack(context);
    // this.authMicroserviceClient.emit(AuthMicroserviceEvents.USER_LOGIN_VALIDATED, { id: check.id });
    
    const user = { ...check };
    delete user.password;
    console.log(`auth - check user:`, user);

    const token = await this.jwtService.signAsync(user);
    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: {
          token,
          user: user
        }
      }
    };
    return serviceMethodResults;
  }

  async createJwt(data: any, context: RmqContext): ServiceMethodAsyncResults {
    const jwt = await this.jwtService.signAsync(data);
    this.rmqService.ack(context);
    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: jwt
      }
    };
    return serviceMethodResults;
  }

  async checkJwt(data: { jwt: string }, context: RmqContext): ServiceMethodAsyncResults {
    const isExpired = await this.jwtService.verifyAsync(data.jwt);
    this.rmqService.ack(context);
    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: isExpired
      }
    };
    return serviceMethodResults;
  }
}
