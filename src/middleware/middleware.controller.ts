import { Body, Controller, Post } from '@nestjs/common';

@Controller('middlware')
export class MiddlewareController {
  @Post()
  fn(@Body('n') n: number) {
    return `Vakir recebido: ${n}`;
  }
  @Post('/sem')
  fnTeste(@Body('n') n: number) {
    return `Vakir recebido: ${n}`;
  }
}
