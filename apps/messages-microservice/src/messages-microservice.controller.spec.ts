import { Test, TestingModule } from '@nestjs/testing';
import { MessagesMicroserviceController } from './messages-microservice.controller';
import { MessagesMicroserviceService } from './messages-microservice.service';

describe('MessagesMicroserviceController', () => {
  let messagesMicroserviceController: MessagesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MessagesMicroserviceController],
      providers: [MessagesMicroserviceService],
    }).compile();

    messagesMicroserviceController = app.get<MessagesMicroserviceController>(MessagesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(messagesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
