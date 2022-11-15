import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
