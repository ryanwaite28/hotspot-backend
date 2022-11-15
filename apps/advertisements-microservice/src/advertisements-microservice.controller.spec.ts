import { Test, TestingModule } from '@nestjs/testing';
import { AdvertisementsMicroserviceController } from './advertisements-microservice.controller';
import { AdvertisementsMicroserviceService } from './advertisements-microservice.service';

describe('AdvertisementsMicroserviceController', () => {
  let advertisementsMicroserviceController: AdvertisementsMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AdvertisementsMicroserviceController],
      providers: [AdvertisementsMicroserviceService],
    }).compile();

    advertisementsMicroserviceController = app.get<AdvertisementsMicroserviceController>(AdvertisementsMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(advertisementsMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
