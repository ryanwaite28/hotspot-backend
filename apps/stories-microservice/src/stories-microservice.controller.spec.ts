import { Test, TestingModule } from '@nestjs/testing';
import { StoriesMicroserviceController } from './stories-microservice.controller';
import { StoriesMicroserviceService } from './stories-microservice.service';

describe('StoriesMicroserviceController', () => {
  let storiesMicroserviceController: StoriesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StoriesMicroserviceController],
      providers: [StoriesMicroserviceService],
    }).compile();

    storiesMicroserviceController = app.get<StoriesMicroserviceController>(StoriesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(storiesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
