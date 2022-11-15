import { Test, TestingModule } from '@nestjs/testing';
import { SocialnetworksMicroserviceController } from './socialnetworks-microservice.controller';
import { SocialnetworksMicroserviceService } from './socialnetworks-microservice.service';

describe('SocialnetworksMicroserviceController', () => {
  let socialnetworksMicroserviceController: SocialnetworksMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SocialnetworksMicroserviceController],
      providers: [SocialnetworksMicroserviceService],
    }).compile();

    socialnetworksMicroserviceController = app.get<SocialnetworksMicroserviceController>(SocialnetworksMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(socialnetworksMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
