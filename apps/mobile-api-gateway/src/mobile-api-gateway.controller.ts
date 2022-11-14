import { Controller, Get } from '@nestjs/common';
import { MobileApiGatewayService } from './mobile-api-gateway.service';

@Controller()
export class MobileApiGatewayController {
  constructor(private readonly mobileApiGatewayService: MobileApiGatewayService) {}

  @Get()
  getHello(): string {
    return this.mobileApiGatewayService.getHello();
  }
}
