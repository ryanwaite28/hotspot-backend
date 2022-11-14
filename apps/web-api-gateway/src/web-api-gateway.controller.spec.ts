import { Test, TestingModule } from '@nestjs/testing';
import { WebApiGatewayController } from './web-api-gateway.controller';
import { WebApiGatewayService } from './web-api-gateway.service';

describe('ApiGatewayController', () => {
  let webApiGatewayController: WebApiGatewayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [WebApiGatewayController],
      providers: [WebApiGatewayService],
    }).compile();

    webApiGatewayController = app.get<WebApiGatewayController>(WebApiGatewayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(webApiGatewayController.root()).toBe('Hello World!');
    });
  });
});
