import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CrudFilmesService } from './crud-filmes.service';
import { CriarFilmeDTO } from './DTO/CriarFilmeDTO';
import { EditarFilmeDTO } from './DTO/EditarFilmeDTO';

@Controller('crud-filmes')
export class CrudFilmesController {
  constructor(private readonly crudFilmesService: CrudFilmesService) {}
  @Get()
  pegarTodos(@Query('invertido') invertido: string) {
    return this.crudFilmesService.pegarTodos(invertido);
  }
  @Post()
  criar(@Body() dadosFilme: CriarFilmeDTO) {
    return this.crudFilmesService.criar(dadosFilme);
  }
  @Get(':id')
  pegarUm(@Param('id') id: string) {
    return this.crudFilmesService.pegarUm(id);
  }
  @Put(':id')
  atualizarUm(@Param('id') id: string, @Body() dadosFilmes: EditarFilmeDTO) {
    return this.crudFilmesService.atualizarUm(id, dadosFilmes);
  }
  @Delete(':id')
  deletar(@Param('id') id: string) {
    return this.crudFilmesService.deletar(id);
  }
}
