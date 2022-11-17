import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersSuspendedMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
