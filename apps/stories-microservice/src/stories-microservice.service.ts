import { Injectable } from '@nestjs/common';

@Injectable()
export class StoriesMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
