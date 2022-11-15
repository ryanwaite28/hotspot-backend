import { Injectable } from '@nestjs/common';

@Injectable()
export class SocialnetworksMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
