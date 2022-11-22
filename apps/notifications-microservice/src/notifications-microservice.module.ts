import { MicroserviceNames, RmqModule } from '@common/common';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './database/user.entity';
import { UsersRepository } from './database/user.repo';
import { NotificationsMicroserviceController } from './notifications-microservice.controller';
import { NotificationsMicroserviceService } from './notifications-microservice.service';



const db_config = {
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
};
console.log({ db_config });

@Module({
  imports: [
    RmqModule,
    RmqModule.registerClients([
      MicroserviceNames.NOTIFICATIONS
    ]),
    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forRoot(db_config as any),
  ],
  controllers: [NotificationsMicroserviceController],
  providers: [
    NotificationsMicroserviceService,
    UsersRepository,
    TypeOrmModule,
  ],
})
export class NotificationsMicroserviceModule {}
