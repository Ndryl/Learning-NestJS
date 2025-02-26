import { Controller, Body, Post, UsePipes, Query } from '@nestjs/common';
import { MoedaPipe } from './moeda/moeda.pipe';

@Controller('pipes')
export class PipesController {
  @Post('/moeda')
  @UsePipes(MoedaPipe)
  pipeTransforma(@Body('preco') dados: any, @Query('teste') teste: string) {
    const { preco } = dados;
    return `Preco obtido: ${preco}`;
  }
}
