import { Controller, Get } from '@nestjs/common';
import { CliquesMicroserviceService } from './cliques-microservice.service';

@Controller()
export class CliquesMicroserviceController {
  constructor(private readonly cliquesMicroserviceService: CliquesMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.cliquesMicroserviceService.getHello();
  }
}
