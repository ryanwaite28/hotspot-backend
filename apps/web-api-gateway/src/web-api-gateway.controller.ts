import { Controller, Get } from '@nestjs/common';
import { WebApiGatewayService } from './web-api-gateway.service';

@Controller()
export class WebApiGatewayController {
  constructor(private readonly webApiGatewayService: WebApiGatewayService) {}

  @Get()
  root(): object {
    return { message: `Web API Gateway Online` };
  }
}
