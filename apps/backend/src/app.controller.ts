/* eslint-disable @typescript-eslint/no-empty-function */
import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('ping')
  ping(): string {
    return 'pong';
  }
}
