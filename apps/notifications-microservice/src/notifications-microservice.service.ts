import { Inject, Injectable } from '@nestjs/common';
import { UserEntity } from './database/user.entity';
import { UsersRepository } from './database/user.repo';
import { HttpStatusCode, MicroserviceNames, RmqService, ServiceMethodResults } from '@common/common';
import { ClientProxy, RmqContext } from '@nestjs/microservices';

@Injectable()
export class NotificationsMicroserviceService {
  constructor (
    @Inject(MicroserviceNames.NOTIFICATIONS) private notificationsMicroserviceClient: ClientProxy,
    private usersRepository: UsersRepository,
    private rmqService: RmqService
  ) {}

  ping(context: RmqContext) {
    this.rmqService.ack(context);
    // this.notificationsMicroserviceClient.emit(AuthMicroserviceEvents.AUTH_MS_PINGED, {});
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
}