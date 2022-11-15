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
    const results = this.authMicroserviceService.validateUserLogin(data, context);
    return results;
  }

  @MessagePattern(AuthMicroserviceMessages.CREATE_NEW_JWT)
  createJwt(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(`AuthMicroserviceController.checkJwt:`, { data, context });
    return this.authMicroserviceService.createJwt(data, context);
  }

  @MessagePattern(AuthMicroserviceMessages.CHECK_JWT)
  checkJwt(@Payload() data: { jwt: string }, @Ctx() context: RmqContext) {
    console.log(`AuthMicroserviceController.checkJwt:`, { data, context });
    return this.authMicroserviceService.checkJwt(data, context);
  }



  @EventPattern(UsersMicroserviceEvents.USER_CREATED)
  userCreated(@Payload() data: { user: UserEntity }, @Ctx() context: RmqContext) {
    console.log(`AuthMicroserviceController.userCreated:`, { data, context });
    this.authMicroserviceService.createUser(data.user, context);
  }

  @EventPattern(UsersMicroserviceEvents.USER_UPDATED)
  userUpdated(@Payload() data: { user: UserEntity }, @Ctx() context: RmqContext) {
    console.log(`AuthMicroserviceController.userUpdated:`, { data, context });
    this.authMicroserviceService.updateUser(data.user, context);
  }
}
