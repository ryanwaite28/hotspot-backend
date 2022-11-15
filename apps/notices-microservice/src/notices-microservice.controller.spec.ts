import { Test, TestingModule } from '@nestjs/testing';
import { NoticesMicroserviceController } from './notices-microservice.controller';
import { NoticesMicroserviceService } from './notices-microservice.service';

describe('NoticesMicroserviceController', () => {
  let noticesMicroserviceController: NoticesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NoticesMicroserviceController],
      providers: [NoticesMicroserviceService],
    }).compile();

    noticesMicroserviceController = app.get<NoticesMicroserviceController>(NoticesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(noticesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
