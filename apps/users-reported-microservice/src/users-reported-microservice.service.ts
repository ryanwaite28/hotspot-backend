import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersReportedMicroserviceService {
  getHello(): string {
    return 'Hello World!';
  }
}
