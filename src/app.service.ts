import { Injectable,Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async generateEvent(message){
    await this.communicationClient.emit(
      'response_event',
     {"creation":message},
    );
  }
}
