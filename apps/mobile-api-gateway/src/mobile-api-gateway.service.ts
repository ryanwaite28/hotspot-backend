import { Injectable } from '@nestjs/common';

@Injectable()
export class MobileApiGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
