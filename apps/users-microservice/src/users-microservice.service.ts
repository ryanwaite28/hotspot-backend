import {
  BroadcastService,
  CatchAsyncServiceError,
  CatchServiceError,
  CreateUserDto,
  HttpStatusCode,
  MicroserviceNames,
  QueryUsersDto,
  RmqService,
  // sendAwsEmail,
  ServiceMethodResults,
  UpdateUserDto,
  UserPasswordUpdateDto,
  UsersMicroserviceEvents
} from '@common/common';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, RmqContext } from '@nestjs/microservices';
import { UsersRepository } from './database/users.repo';
import * as bcrypt from 'bcrypt-nodejs';
// import * as nunjucks from 'nunjucks';
// import path from 'path';
// import { SendEmailCommandOutput } from "@aws-sdk/client-ses";





// nunjucks.configure(path.join(__dirname, 'email'), { autoescape: true });




@Injectable()
export class UsersMicroserviceService {
  constructor (
    // @Inject(MicroserviceNames.USERS) private usersMicroserviceClient: ClientProxy,
    private usersRepository: UsersRepository,
    private rmqService: RmqService,
    private broadcastService: BroadcastService,
  ) {}

  // @CatchServiceError()
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



  @CatchAsyncServiceError({ errorMessage: `Could not create user; something went wrong...` })
  async createUser(data: CreateUserDto, context: RmqContext): Promise<ServiceMethodResults> {
    const check_email = await this.usersRepository.findOneByEmail(data.email);
    if (check_email) {
      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.BAD_REQUEST,
        error: true,
        info: {
          message: `Email already in use.`
        }
      };
      return serviceMethodResults;
    }

    const check_username = await this.usersRepository.findOneByEmail(data.username);
    if (check_username) {
      const serviceMethodResults: ServiceMethodResults = {
        status: HttpStatusCode.BAD_REQUEST,
        error: true,
        info: {
          message: `Username already in use.`
        }
      };
      return serviceMethodResults;
    }

    const user = await this.usersRepository.create({ ...data, password: bcrypt.hashSync(data.password) });
    this.rmqService.ack(context);

    console.log(`calling broadcast...`);
    this.broadcastService.broadcastEventToAllMicroservices(UsersMicroserviceEvents.USER_CREATED, { user }, [MicroserviceNames.USERS]);
    console.log(`continuing after calling broadcast...`);

    
    // const email_msg = nunjucks.render('signup.email.html', {
    //   name: user.username,
    //   verify_link: `${process.env.USER_SIGNUP_VERIFY_DOMAIN}/verify-email/${user.uuid}`
    // });
    // sendAwsEmail({ to: user.email, message: email_msg })
    //   .then((output: SendEmailCommandOutput) => {
    //     console.log(output);
    //   })
    //   .catch((error) => {
    //     console.error(error, { user, email_msg });
    //   });

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: { ...user, password: undefined },
        message: `User created`,
      }
    };
    return serviceMethodResults;
  }

  @CatchAsyncServiceError({ errorMessage: `Could not update user; something went wrong...` })
  async updateUser(id: number, data: UpdateUserDto, context: RmqContext): Promise<ServiceMethodResults> {
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

    const user = this.usersRepository.update(id, data);
    this.rmqService.ack(context);
    this.broadcastService.broadcastEventToAllMicroservices(UsersMicroserviceEvents.USER_UPDATED, { user }, [MicroserviceNames.USERS]);
    
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

  @CatchAsyncServiceError({ errorMessage: `Could not delete user; something went wrong...` })
  async deleteUser(id: number, context: RmqContext): Promise<ServiceMethodResults> {
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

    const deletes = await this.usersRepository.destroy(id);
    this.rmqService.ack(context);
    this.broadcastService.broadcastEventToAllMicroservices(UsersMicroserviceEvents.USER_DELETED, { id }, [MicroserviceNames.USERS]);

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: deletes,
        message: `User deleted`,
      }
    };
    return serviceMethodResults;
  }



  @CatchAsyncServiceError({ errorMessage: `Could not getAllUsers; something went wrong...` })
  async getAllUsers(context: RmqContext): Promise<ServiceMethodResults> {
    const users = await this.usersRepository.findAll();
    this.rmqService.ack(context);

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: users
      }
    };
    return serviceMethodResults;
  }

  @CatchAsyncServiceError({ errorMessage: `Could not getUserById; something went wrong...` })
  async getUserById(id: number, context: RmqContext): Promise<ServiceMethodResults> {
    const user = await this.usersRepository.findOneById(id);
    this.rmqService.ack(context);

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: user
      }
    };
    return serviceMethodResults;
  }

  @CatchAsyncServiceError({ errorMessage: `Could not getUserByEmail; something went wrong...` })
  async getUserByEmail(email: string, context: RmqContext): Promise<ServiceMethodResults> {
    const user = await this.usersRepository.findOneByEmail(email);
    this.rmqService.ack(context);

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: user
      }
    };
    return serviceMethodResults;
  }

  @CatchAsyncServiceError({ errorMessage: `Could not getUserByPhone; something went wrong...` })
  async getUserByPhone(phone: string, context: RmqContext): Promise<ServiceMethodResults> {
    const user = await this.usersRepository.findOneByPhone(phone);
    this.rmqService.ack(context);

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: user
      }
    };
    return serviceMethodResults;
  }

  @CatchAsyncServiceError({ errorMessage: `Could not queryUsers; something went wrong...` })
  async queryUsers(data: QueryUsersDto, context: RmqContext): Promise<ServiceMethodResults> {
    const results = await this.usersRepository.findOneByQuery(data);
    this.rmqService.ack(context);

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: results
      }
    };
    return serviceMethodResults;
  }



  @CatchAsyncServiceError({ errorMessage: `Could not userPasswordUpdate; something went wrong...` })
  async userPasswordUpdate(data: UserPasswordUpdateDto, context: RmqContext): Promise<ServiceMethodResults> {
    const check = await this.usersRepository.findOneById(data.id);
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

    const badPassword = bcrypt.compareSync(data.currentPassword, check.password) === false;
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

    const password = bcrypt.hashSync(data.newPassword);
    const user = this.usersRepository.updateUser(data.id, { password });
    this.rmqService.ack(context);
    
    this.broadcastService.broadcastEventToAllMicroservices(UsersMicroserviceEvents.USER_UPDATED, { user }, [MicroserviceNames.USERS]);

    const serviceMethodResults: ServiceMethodResults = {
      status: HttpStatusCode.OK,
      error: false,
      info: {
        data: user
      }
    };
    return serviceMethodResults;
  }

  @CatchAsyncServiceError({ errorMessage: `Could not userPasswordReset; something went wrong...` })
  async userPasswordReset(email: string, context: RmqContext): Promise<ServiceMethodResults> {
    const check = await this.usersRepository.findOneByEmail(email);
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


  }



  // @CatchAsyncServiceError({ errorMessage: `Could not sendEmailVerificationCode; something went wrong...` })
  // async sendEmailVerificationCode(email: string, context: RmqContext): Promise<ServiceMethodResults> {

  // }

  // @CatchAsyncServiceError({ errorMessage: `Could not sendPhoneVerificationCode; something went wrong...` })
  // async sendPhoneVerificationCode(phone: string, context: RmqContext): Promise<ServiceMethodResults> {

  // }



  // @CatchAsyncServiceError({ errorMessage: `Could not emailVerification; something went wrong...` })
  // async emailVerification(code: string, context: RmqContext): Promise<ServiceMethodResults> {

  // }

  // @CatchAsyncServiceError({ errorMessage: `Could not phoneVerification; something went wrong...` })
  // async phoneVerification(code: string, context: RmqContext): Promise<ServiceMethodResults> {

  // }
}
