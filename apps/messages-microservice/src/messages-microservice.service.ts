import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
