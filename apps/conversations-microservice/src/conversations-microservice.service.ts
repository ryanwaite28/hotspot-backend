import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversationsMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
