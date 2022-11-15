import { Controller, Get } from '@nestjs/common';
import { CommentsMicroserviceService } from './comments-microservice.service';

@Controller()
export class CommentsMicroserviceController {
  constructor(private readonly commentsMicroserviceService: CommentsMicroserviceService) {}

  @Get()
  getHello(): string {
    return this.commentsMicroserviceService.getHello();
  }
}
