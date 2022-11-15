import { Test, TestingModule } from '@nestjs/testing';
import { SlidesMicroserviceController } from './slides-microservice.controller';
import { SlidesMicroserviceService } from './slides-microservice.service';

describe('SlidesMicroserviceController', () => {
  let slidesMicroserviceController: SlidesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SlidesMicroserviceController],
      providers: [SlidesMicroserviceService],
    }).compile();

    slidesMicroserviceController = app.get<SlidesMicroserviceController>(SlidesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(slidesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
