import { Test, TestingModule } from '@nestjs/testing';
import { CliquesMicroserviceController } from './cliques-microservice.controller';
import { CliquesMicroserviceService } from './cliques-microservice.service';

describe('CliquesMicroserviceController', () => {
  let cliquesMicroserviceController: CliquesMicroserviceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CliquesMicroserviceController],
      providers: [CliquesMicroserviceService],
    }).compile();

    cliquesMicroserviceController = app.get<CliquesMicroserviceController>(CliquesMicroserviceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cliquesMicroserviceController.getHello()).toBe('Hello World!');
    });
  });
});
