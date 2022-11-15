import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
