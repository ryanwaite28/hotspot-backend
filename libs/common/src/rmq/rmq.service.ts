import { Injectable } from '@nestjs/common';
import { RmqOptions, Transport, RmqContext } from '@nestjs/microservices';
import { MicroserviceNames } from '../enums/microservices/_microservices.enum';

@Injectable()
export class RmqService {
  constructor() {}

  static getOptions(microservice: MicroserviceNames, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBIT_MQ_URI],
        queue: process.env[`RABBIT_MQ_${microservice}_QUEUE`],
        noAck,
        persistent: true,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }
}
