import { Test, TestingModule } from '@nestjs/testing';
import { CommunicationsMicroserviceController } from './communications-microservice.controller';
import { CommunicationsMicroserviceService } from './communications-microservice.service';

describe('CommunicationsMicroserviceController', () => {
  let communicationsMicroserviceController: CommunicationsMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommunicationsMicroserviceController],
      providers: [CommunicationsMicroserviceService],
    }).compile();

    communicationsMicroserviceController = app.get<CommunicationsMicroserviceController>(CommunicationsMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(communicationsMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
