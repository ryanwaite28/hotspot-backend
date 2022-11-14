import { NotificationsMicroserviceMessages, ServiceMethodResults, UsersMicroserviceEvents } from '@common/common';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { UserEntity } from './database/user.entity';
import { NotificationsMicroserviceService } from './notifications-microservice.service';

@Controller()
export class NotificationsMicroserviceController {
  constructor(
    private notificationsMicroserviceService: NotificationsMicroserviceService,
  ) {}


  @MessagePattern(NotificationsMicroserviceMessages.NOTIFICATIONS_MS_PING)
  ping(@Ctx() context: RmqContext): ServiceMethodResults {
    console.log(`NotificationsMicroserviceController.ping:`, { context });
    return this.notificationsMicroserviceService.ping(context);
  }


  @EventPattern(UsersMicroserviceEvents.USER_CREATED)
  userCreated(@Payload() data: { user: UserEntity }, @Ctx() context: RmqContext) {
    console.log(`NotificationsMicroserviceController.userCreated:`, { data, context });
    this.notificationsMicroserviceService.createUser(data.user, context);
  }

  @EventPattern(UsersMicroserviceEvents.USER_UPDATED)
  userUpdated(@Payload() data: { user: UserEntity }, @Ctx() context: RmqContext) {
    console.log(`NotificationsMicroserviceController.userUpdated:`, { data, context });
    this.notificationsMicroserviceService.updateUser(data.user, context);
  }
}
