import { CreateUserDto, HttpStatusCode, MicroserviceNames, RmqService, ServiceMethodResults, UpdateUserDto, UsersMicroserviceEvents } from '@common/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RmqContext } from '@nestjs/microservices';
import { UsersRepository } from './database/user.repo';
import * as bcrypt from 'bcrypt-nodejs';



@Injectable()
export class UsersMicroserviceService {
  constructor (
    @Inject(MicroserviceNames.USERS) private usersMicroserviceClient: ClientProxy,
    private usersRepository: UsersRepository,
    private rmqService: RmqService
  ) {}

  ping(context: RmqContext) {
    this.rmqService.ack(context);
    // this.usersMicroserviceClient.emit(UsersMicroserviceEvents.USERS_MS_PINGED, {});
    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        message: `UsersMicroserviceService Pinged`
      }
    };
    return serviceMethodResults; 
  }

  async createUser(data: CreateUserDto, context: RmqContext): Promise<ServiceMethodResults> {
    try {
      const check = await this.usersRepository.findOneByEmail(data.email);
      if (check) {
        const serviceMethodResults: ServiceMethodResults = {
          status: HttpStatusCode.BAD_REQUEST,
          error: true,
          info: {
            message: `Email already in use.`
          }
        };
        return serviceMethodResults;
      }

      const user = this.usersRepository.create({ ...data, password: bcrypt.hashSync(data.password) });
      this.rmqService.ack(context);
      this.usersMicroserviceClient.emit(UsersMicroserviceEvents.USER_CREATED, { user });

      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.OK,
        error: false,
        info: {
          data: user,
          message: `User created`,
        }
      };
      return serviceMethodResults;
    }
    catch (error) {
      console.log(`UsersMicroserviceService.createUser error:`, error, { data });
      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        error: true,
        info: {
          error,
          message: `Could not create user; something went wrong...`,
        }
      };
      return serviceMethodResults;
    }
  }

  async updateUser(id: number, data: UpdateUserDto, context: RmqContext): Promise<ServiceMethodResults> {
    try {
      const check = await this.usersRepository.findOneById(id);
      if (!check) {
        const serviceMethodResults: ServiceMethodResults = {
          status: HttpStatusCode.BAD_REQUEST,
          error: true,
          info: {
            message: `Could not find user data.`
          }
        };
        return serviceMethodResults;
      }

      const user = this.usersRepository.update(id, check);
      this.rmqService.ack(context);
      this.usersMicroserviceClient.emit(UsersMicroserviceEvents.USER_UPDATED, { user });
      
      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.OK,
        error: false,
        info: {
          data: user,
          message: `User updated`,
        }
      };
      return serviceMethodResults;
    }
    catch (error) {
      console.log(`UsersMicroserviceService.updateUser error:`, error, { id, data });
      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.INTERNAL_SERVER_ERROR,
        error: true,
        info: {
          error,
          message: `Could not create user; something went wrong...`,
        }
      };
      return serviceMethodResults;
    }
  }
}
