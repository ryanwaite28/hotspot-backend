import { Injectable } from '@nestjs/common';

@Injectable()
export class SlidesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
