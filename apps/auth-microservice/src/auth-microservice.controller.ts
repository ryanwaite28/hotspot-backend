import { AuthMicroserviceMessages, LoginUserDto, RmqService, ServiceMethodResults, UsersMicroserviceEvents } from '@common/common';
import { Controller } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { AuthMicroserviceService } from './auth-microservice.service';
import { UserEntity } from './database/user.entity';

@Controller()
export class AuthMicroserviceController {
  constructor (
    private readonly authMicroserviceService: AuthMicroserviceService
  ) {}

  @MessagePattern(AuthMicroserviceMessages.AUTH_MS_PING)
  ping(@Ctx() context: RmqContext): ServiceMethodResults {
    console.log(`AuthMicroserviceController.ping:`, { context });
    return this.authMicroserviceService.ping(context);
  }

  @MessagePattern(AuthMicroserviceMessages.VALIDATE_USER_LOGIN)
  validateUserLogin(@Payload() data: LoginUserDto, @Ctx() context: RmqContext) {
    console.log(`AuthMicroserviceController.validateUserLogin:`, { data, context });
    const token = this.authMicroserviceService.validateUser(data, context);
    return { token, timestamp: Date.now() };
  }



  @EventPattern(UsersMicroserviceEvents.USER_CREATED)
  userCreated(@Payload() data: { user: UserEntity }, @Ctx() context: RmqContext) {
    console.log(`AuthMicroserviceController.userCreated:`, { data, context });
    this.authMicroserviceService.createUser(data.user, context);
  }

  @EventPattern(UsersMicroserviceEvents.USER_CREATED)
  userUpdated(@Payload() data: { user: UserEntity }, @Ctx() context: RmqContext) {
    console.log(`AuthMicroserviceController.userUpdated:`, { data, context });
    this.authMicroserviceService.updateUser(data.user, context);
  }
}
