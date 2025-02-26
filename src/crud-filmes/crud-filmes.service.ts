import { Injectable } from '@nestjs/common';
import { CriarFilmeDTO } from './DTO/CriarFilmeDTO';
import { EditarFilmeDTO } from './DTO/EditarFilmeDTO';

@Injectable()
export class CrudFilmesService {
  private filmes = [
    { titulo: 'Filme 1', diretor: 'Diretor 1', Ano: 2001 },
    { titulo: 'Filme 2', diretor: 'Diretor 2', Ano: 2002 },
    { titulo: 'Filme 3', diretor: 'Diretor 3', Ano: 2003 },
  ];
  pegarTodos(invertido: string) {
    if (invertido) return this.filmes.slice().reverse();
    return this.filmes;
  }
  criar(dadosFilme: CriarFilmeDTO) {
    return this.filmes.push(dadosFilme);
  }
  pegarUm(id: string) {
    const index = parseInt(id);
    if (index >= 0 && index < this.filmes.length) {
      return this.filmes[index];
    }
    return null; // Retorna null se o índice for inválido
  }
  atualizarUm(id: string, dadosFilme: EditarFilmeDTO) {
    const filme = this.filmes[+id];
    const filmeAtualizado = { ...filme, ...dadosFilme };
    this.filmes[+id] = filmeAtualizado;
    return filmeAtualizado;
  }
  deletar(id: string) {
    const filme = this.filmes.slice(+id, 1);
    return filme;
  }
}
