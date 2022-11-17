import { Test, TestingModule } from '@nestjs/testing';
import { UsersSuspendedMicroserviceController } from './users-suspended-microservice.controller';
import { UsersSuspendedMicroserviceService } from './users-suspended-microservice.service';

describe('UsersSuspendedMicroserviceController', () => {
  let usersSuspendedMicroserviceController: UsersSuspendedMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersSuspendedMicroserviceController],
      providers: [UsersSuspendedMicroserviceService],
    }).compile();

    usersSuspendedMicroserviceController = app.get<UsersSuspendedMicroserviceController>(UsersSuspendedMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(usersSuspendedMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
