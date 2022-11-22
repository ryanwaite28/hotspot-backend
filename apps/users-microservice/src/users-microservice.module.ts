import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersMicroserviceController } from './users-microservice.controller';
import { UsersMicroserviceService } from './users-microservice.service';
import { BroadcastModule, CommonLibraryModule, MicroserviceNames, RmqModule } from '@common/common';
import { UserEntity } from './database/user.entity';
import { UsersRepository } from './database/users.repo';


const db_config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.TYPEORM_DATABASE_HOST,
  port: parseInt(process.env.TYPEORM_DATABASE_PORT),
  username: process.env.TYPEORM_DATABASE_USERNAME,
  password: process.env.TYPEORM_DATABASE_PASSWORD,
  database: process.env.TYPEORM_DATABASE_NAME,
  entities: [
    UserEntity,
  ],
  synchronize: true,
  autoLoadEntities: true,
};
console.log({ db_config });


@Module({
  imports: [
    CommonLibraryModule,

    // clients for dispatching messages/events to microservice queue listeners
    // RmqModule.registerClients([
    //   MicroserviceNames.USERS
    // ]),

    BroadcastModule,
    RmqModule,

    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forRoot(db_config as any),
  ],
  controllers: [UsersMicroserviceController],
  providers: [
    UsersMicroserviceService,
    UsersRepository,
    TypeOrmModule,
  ],
})
export class UsersMicroserviceModule {}
