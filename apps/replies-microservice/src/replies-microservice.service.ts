import { Injectable } from '@nestjs/common';

@Injectable()
export class RepliesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
