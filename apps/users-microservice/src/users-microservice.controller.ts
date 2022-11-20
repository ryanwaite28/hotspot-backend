import { CreateUserDto, UpdateUserDto, UsersMicroserviceMessages, ServiceMethodAsyncResults, ServiceMethodResults, QueryUsersDto, UserPasswordUpdateDto } from '@common/common';
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

  @MessagePattern(UsersMicroserviceMessages.DELETE_USER)
  deleteUser(@Payload() payload: { id: number }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.deleteUser:`, { payload, context });
    const user = this.usersMicroserviceService.deleteUser(payload.id, context);
    return user;
  }



  @MessagePattern(UsersMicroserviceMessages.GET_USER_BY_ID)
  getUserById(@Payload() payload: { id: number }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.getUserById:`, { payload, context });
    const user = this.usersMicroserviceService.getUserById(payload.id, context);
    return user;
  }

  @MessagePattern(UsersMicroserviceMessages.GET_USER_BY_EMAIL)
  getUserByEmail(@Payload() payload: { email: string }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.getUserByEmail:`, { payload, context });
    const user = this.usersMicroserviceService.getUserByEmail(payload.email, context);
    return user;
  }

  @MessagePattern(UsersMicroserviceMessages.GET_USER_BY_PHONE)
  getUserByPhone(@Payload() payload: { phone: string }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.getUserByPhone:`, { payload, context });
    const user = this.usersMicroserviceService.getUserByPhone(payload.phone, context);
    return user;
  }

  @MessagePattern(UsersMicroserviceMessages.QUERY_USERS)
  queryUsers(@Payload() payload: QueryUsersDto, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.queryUsers:`, { payload, context });
    const user = this.usersMicroserviceService.queryUsers(payload, context);
    return user;
  }



  @MessagePattern(UsersMicroserviceMessages.USER_PASSWORD_UPDATE)
  userPasswordUpdate(@Payload() payload: UserPasswordUpdateDto, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.userPasswordUpdate:`, { payload, context });
    const user = this.usersMicroserviceService.userPasswordUpdate(payload, context);
    return user;
  }

  @MessagePattern(UsersMicroserviceMessages.USER_PASSWORD_RESET)
  userPasswordReset(@Payload() payload: { email: string }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.userPasswordReset:`, { payload, context });
    const user = this.usersMicroserviceService.userPasswordReset(payload.email, context);
    return user;
  }



  @MessagePattern(UsersMicroserviceMessages.SEND_EMAIL_VERIFICATION_CODE)
  sendEmailVerificationCode(@Payload() payload: { email: string }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.sendEmailVerificationCode:`, { payload, context });
    const user = this.usersMicroserviceService.sendEmailVerificationCode(payload.email, context);
    return user;
  }

  @MessagePattern(UsersMicroserviceMessages.SEND_PHONE_VERIFICATION_CODE)
  sendPhoneVerificationCode(@Payload() payload: { phone: string }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.sendPhoneVerificationCode:`, { payload, context });
    const user = this.usersMicroserviceService.sendPhoneVerificationCode(payload.phone, context);
    return user;
  }



  @MessagePattern(UsersMicroserviceMessages.EMAIL_VERIFICATION)
  emailVerification(@Payload() payload: { code: string }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.emailVerification:`, { payload, context });
    const user = this.usersMicroserviceService.emailVerification(payload.code, context);
    return user;
  }

  @MessagePattern(UsersMicroserviceMessages.PHONE_VERIFICATION)
  phoneVerification(@Payload() payload: { code: string }, @Ctx() context: RmqContext) {
    console.log(`UsersMicroserviceController.phoneVerification:`, { payload, context });
    const user = this.usersMicroserviceService.phoneVerification(payload.code, context);
    return user;
  }
}
