import { Module } from '@nestjs/common';
import { CliquesMicroserviceController } from './cliques-microservice.controller';
import { CliquesMicroserviceService } from './cliques-microservice.service';

@Module({
  imports: [],
  controllers: [CliquesMicroserviceController],
  providers: [CliquesMicroserviceService],
})
export class CliquesMicroserviceModule {}
