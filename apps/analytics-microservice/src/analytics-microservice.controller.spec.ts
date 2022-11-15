import { Test, TestingModule } from '@nestjs/testing';
import { AnalyticsMicroserviceController } from './analytics-microservice.controller';
import { AnalyticsMicroserviceService } from './analytics-microservice.service';

describe('AnalyticsMicroserviceController', () => {
  let analyticsMicroserviceController: AnalyticsMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AnalyticsMicroserviceController],
      providers: [AnalyticsMicroserviceService],
    }).compile();

    analyticsMicroserviceController = app.get<AnalyticsMicroserviceController>(AnalyticsMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(analyticsMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
