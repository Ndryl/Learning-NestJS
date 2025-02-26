import { Controller, Body, Post, UsePipes, Query } from '@nestjs/common';
import { MoedaPipe } from './moeda/moeda.pipe';

@Controller('pipes')
export class PipesController {
  @Post('/moeda')
  @UsePipes(MoedaPipe)
  pipeTransforma(@Body() dados: any) {
    const { preco } = dados;
    return `Preço obtido: ${preco}`;
  }
}
