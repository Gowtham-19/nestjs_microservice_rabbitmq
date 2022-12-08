import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //listening to the queue data
  @EventPattern('book-created')
  async handleBookCreatedEvent(data: Record<string, unknown>) {
    console.log("data received from service1",data);
    //generating response to communication microservice
    this.appService.generateEvent("success")
  }
}
