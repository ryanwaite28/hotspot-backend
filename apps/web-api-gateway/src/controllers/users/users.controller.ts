import {
  AuthMicroserviceMessages,
  CreateUserDto,
  MicroserviceNames,
  ServiceMethodResults,
  ServiceMethodResultsInfo,
  UpdateUserDto,
  UsersMicroserviceMessages,
} from '@common/common';
import {
  Body,
  Param,
  Controller,
  Get,
  Inject,
  Post,
  Put,
  ParseIntPipe,
  Res,
  HttpException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import { catchError, combineLatestWith, map, mergeMap } from 'rxjs';


@Controller('users')
export class UsersController {
  constructor(
    @Inject(MicroserviceNames.USERS) private usersMicroserviceClient: ClientProxy,
    @Inject(MicroserviceNames.AUTH) private authMicroserviceClient: ClientProxy,
  ) {}


  // routing/forwarding requests to users microservice via messages

  @Get('ping-ms')
  pingMicroservice() {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.USERS_MS_PING, {}).pipe(
      map((results: ServiceMethodResults) => {
        if (results.error) {
          throw new HttpException(results.info, results.status);
        }
        return results.info;
      })
    );
  }



  @Get()
  getAllUsers() {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.GET_ALL_USERS, {}).pipe(
      map((results: ServiceMethodResults) => {
        if (results.error) {
          throw new HttpException(results.info, results.status);
        }
        return results.info;
      })
    );
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.GET_USER_BY_ID, { id }).pipe(
      map((results: ServiceMethodResults) => {
        if (results.error) {
          throw new HttpException(results.info, results.status);
        }
        return results.info;
      })
    );
  }

  @Post()
  createUser(@Body() payload: CreateUserDto) {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.CREATE_USER, payload).pipe(
      mergeMap((results: ServiceMethodResults) => {
        console.log(`web-api-gateway create user response`, results);
        if (results.error) {
          throw new HttpException(results.info, results.status);
        }
        return this.authMicroserviceClient.send(AuthMicroserviceMessages.CREATE_NEW_JWT, results.info.data).pipe(
          map((auth_results: ServiceMethodResults) => {
            if (auth_results.error) {
              throw new HttpException(auth_results.info, auth_results.status);
            }
            return {
              data: {
                you: results.info.data,
                token: auth_results.info.data
              }
            };
          })
        )
      })
    );
  }

  @Put(':id')
  updateUser(@Body() payload: UpdateUserDto, @Param('id', ParseIntPipe) id: number) {
    return this.usersMicroserviceClient.send(UsersMicroserviceMessages.UPDATE_USER, { id, data: payload }).pipe(
      map((results: ServiceMethodResults) => {
        if (results.error) {
          throw new HttpException(results.info, results.status);
        }
        return results.info;
      })
    );
  }
}
