import { Test, TestingModule } from '@nestjs/testing';
import { LivestreamsMicroserviceController } from './livestreams-microservice.controller';
import { LivestreamsMicroserviceService } from './livestreams-microservice.service';

describe('LivestreamsMicroserviceController', () => {
  let livestreamsMicroserviceController: LivestreamsMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LivestreamsMicroserviceController],
      providers: [LivestreamsMicroserviceService],
    }).compile();

    livestreamsMicroserviceController = app.get<LivestreamsMicroserviceController>(LivestreamsMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(livestreamsMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
