import { Test, TestingModule } from '@nestjs/testing';
import { RepliesMicroserviceController } from './replies-microservice.controller';
import { RepliesMicroserviceService } from './replies-microservice.service';

describe('RepliesMicroserviceController', () => {
  let repliesMicroserviceController: RepliesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [RepliesMicroserviceController],
      providers: [RepliesMicroserviceService],
    }).compile();

    repliesMicroserviceController = app.get<RepliesMicroserviceController>(RepliesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(repliesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
