import { CreateUserDto, UpdateUserDto, UsersMicroserviceMessages, ServiceMethodAsyncResults, ServiceMethodResults } from '@common/common';
import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { UsersMicroserviceService } from './users-microservice.service';

@Controller()
export class UsersMicroserviceController {
  constructor (
    private usersMicroserviceService: UsersMicroserviceService
  ) {}

  @MessagePattern(UsersMicroserviceMessages.USERS_MS_PING)
  ping(@Ctx() context: RmqContext): ServiceMethodResults {
    console.log(`UsersMicroserviceController.ping:`, { context });
    return this.usersMicroserviceService.ping(context);
  }

  @MessagePattern(UsersMicroserviceMessages.CREATE_USER)
  createUser(@Payload() data: CreateUserDto, @Ctx() context: RmqContext): ServiceMethodAsyncResults {
    console.log(`UsersMicroserviceController.createUser:`, { data, context });
    const new_user = this.usersMicroserviceService.createUser(data, context);
    return new_user;
  }

  @MessagePattern(UsersMicroserviceMessages.UPDATE_USER)
  updateUser(@Payload() payload: { id: number, data: UpdateUserDto }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.updateUser:`, { payload, context });
    const user = this.usersMicroserviceService.updateUser(payload.id, payload.data, context);
    return user;
  }
}
