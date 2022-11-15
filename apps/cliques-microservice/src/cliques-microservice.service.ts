import { Injectable } from '@nestjs/common';

@Injectable()
export class CliquesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
