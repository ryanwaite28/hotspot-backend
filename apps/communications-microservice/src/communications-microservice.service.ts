import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunicationsMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
