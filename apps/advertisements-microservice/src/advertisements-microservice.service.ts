import { Injectable } from '@nestjs/common';

@Injectable()
export class AdvertisementsMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
