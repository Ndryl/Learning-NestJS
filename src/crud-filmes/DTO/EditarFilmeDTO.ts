//Estrutura de edição
import { IsOptional } from 'class-validator';
export class EditarFilmeDTO {
  @IsOptional()
  titulo?: string;
  @IsOptional()
  diretor?: string;
  @IsOptional()
  Ano?: number;
}
