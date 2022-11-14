import { Test, TestingModule } from '@nestjs/testing';
import { MobileApiGatewayController } from './mobile-api-gateway.controller';
import { MobileApiGatewayService } from './mobile-api-gateway.service';

describe('MobileApiGatewayController', () => {
  let mobileApiGatewayController: MobileApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MobileApiGatewayController],
      providers: [MobileApiGatewayService],
    }).compile();

    mobileApiGatewayController = app.get<MobileApiGatewayController>(MobileApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(mobileApiGatewayController.getHello()).toBe('Hello World!');
    });
  });
});
