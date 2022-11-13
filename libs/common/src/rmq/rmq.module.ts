import { MicroserviceNames } from '@common/common';
import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';



// https://github.com/mguay22/nestjs-rabbitmq-microservices/blob/2f30bd6d365bd199b4fa09512cf97977830bbc41/libs/common/src/rmq/rmq.module.ts

@Module({
  imports: [],
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static registerClients(microservices: MicroserviceNames[], noAck = false): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.registerAsync(
          microservices.map((microservice: MicroserviceNames) => ({
            name: microservice,
            useFactory: () => ({
              transport: Transport.RMQ,
              options: {
                urls: [process.env.RABBIT_MQ_URI],
                queue: process.env[`RABBIT_MQ_${microservice}_QUEUE`],
                noAck,
                persistent: true,
              },
            }),
            inject: [],
          }))
        ),
      ],
      exports: [ClientsModule],
    };
  }
}