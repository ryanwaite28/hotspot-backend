import { Test, TestingModule } from '@nestjs/testing';
import { ConversationsMicroserviceController } from './conversations-microservice.controller';
import { ConversationsMicroserviceService } from './conversations-microservice.service';

describe('ConversationsMicroserviceController', () => {
  let conversationsMicroserviceController: ConversationsMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ConversationsMicroserviceController],
      providers: [ConversationsMicroserviceService],
    }).compile();

    conversationsMicroserviceController = app.get<ConversationsMicroserviceController>(ConversationsMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(conversationsMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
