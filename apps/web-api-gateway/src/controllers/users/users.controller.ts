import { CreateUserDto, MicroserviceNames, UpdateUserDto, UsersMicroserviceMessages } from '@common/common';
import { Body, Controller, Get, Inject, Post, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(MicroserviceNames.USERS) private usersMicroserviceClient: ClientProxy,
  ) {}


  // routing/forwarding requests to users microservice via messages

  @Get('ping-ms')
  pingMicroservice() {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.USERS_MS_PING, {});
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.CREATE_USER, payload);
  }

  @Put()
  updateUser(@Body() payload: UpdateUserDto) {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.UPDATE_USER, payload);
  }
}
