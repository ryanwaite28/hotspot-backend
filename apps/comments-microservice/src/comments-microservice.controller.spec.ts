import { Test, TestingModule } from '@nestjs/testing';
import { CommentsMicroserviceController } from './comments-microservice.controller';
import { CommentsMicroserviceService } from './comments-microservice.service';

describe('CommentsMicroserviceController', () => {
  let commentsMicroserviceController: CommentsMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommentsMicroserviceController],
      providers: [CommentsMicroserviceService],
    }).compile();

    commentsMicroserviceController = app.get<CommentsMicroserviceController>(CommentsMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(commentsMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
