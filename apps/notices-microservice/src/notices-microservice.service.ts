import { Injectable } from '@nestjs/common';

@Injectable()
export class NoticesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
