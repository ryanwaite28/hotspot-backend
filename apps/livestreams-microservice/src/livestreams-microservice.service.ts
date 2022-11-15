import { Injectable } from '@nestjs/common';

@Injectable()
export class LivestreamsMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
