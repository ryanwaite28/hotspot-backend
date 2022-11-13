import { RmqService } from '@common/common';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { NotificationsMicroserviceService } from './notifications-microservice.service';

@Controller()
export class NotificationsMicroserviceController {
  constructor(
    private notificationsMicroserviceService: NotificationsMicroserviceService,
    private rmqService: RmqService
  ) {}

  @EventPattern('user_created')
  // @UseGuards(JwtAuthGuard)
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log(`notifications controller - user_created event`, { data, context });
    this.rmqService.ack(context);
  }
}
