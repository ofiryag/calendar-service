import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventsService } from './events.service';

@Controller()
export class EventsController {
  constructor(private readonly appService: EventsService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
