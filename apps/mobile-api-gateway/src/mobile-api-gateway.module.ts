import { Module } from '@nestjs/common';
import { MobileApiGatewayController } from './mobile-api-gateway.controller';
import { MobileApiGatewayService } from './mobile-api-gateway.service';

@Module({
  imports: [],
  controllers: [MobileApiGatewayController],
  providers: [MobileApiGatewayService],
})
export class MobileApiGatewayModule {}
