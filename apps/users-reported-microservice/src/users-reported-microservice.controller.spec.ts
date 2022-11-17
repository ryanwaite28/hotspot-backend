import { Test, TestingModule } from '@nestjs/testing';
import { UsersReportedMicroserviceController } from './users-reported-microservice.controller';
import { UsersReportedMicroserviceService } from './users-reported-microservice.service';

describe('UsersReportedMicroserviceController', () => {
  let usersReportedMicroserviceController: UsersReportedMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersReportedMicroserviceController],
      providers: [UsersReportedMicroserviceService],
    }).compile();

    usersReportedMicroserviceController = app.get<UsersReportedMicroserviceController>(UsersReportedMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(usersReportedMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
