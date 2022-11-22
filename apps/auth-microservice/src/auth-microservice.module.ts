import { AuthModule, JwtStrategy, MicroserviceNames, RmqModule } from '@common/common';
import { Module } from '@nestjs/common';
import { AuthMicroserviceController } from './auth-microservice.controller';
import { AuthMicroserviceService } from './auth-microservice.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './database/user.entity';
import { UsersRepository } from './database/user.repo';



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
    AuthModule,
    // clients for dispatching messages/events to microservice queue listeners
    RmqModule.registerClients([
      MicroserviceNames.AUTH
    ]),

    TypeOrmModule.forFeature([UserEntity]),
    TypeOrmModule.forRoot(db_config as any),
    
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthMicroserviceController],
  providers: [
    AuthMicroserviceService,
    UsersRepository,
    TypeOrmModule,
    JwtStrategy,
  ],
})
export class AuthMicroserviceModule {}
