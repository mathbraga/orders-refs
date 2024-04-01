import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pendencies')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPendencies(): Promise<string> {
    return this.appService.getPendencies();
  }
}
