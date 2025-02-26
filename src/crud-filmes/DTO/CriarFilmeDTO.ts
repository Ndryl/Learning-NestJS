// Normalment criamos 2 tipos de class para DTO um para criar e outro para editar
import { IsString, IsNotEmpty, Length, IsNumber } from 'class-validator';
export class CriarFilmeDTO {
  @IsNotEmpty()
  @IsString({ message: 'O título precisa ser uma string' })
  @Length(3, 20, {
    message: 'O tamanho da string filme deve estar entre 3 à 20 caracteres',
  })
  titulo: string;

  @IsNotEmpty()
  @IsString({ message: 'O diretor precisa ser uma string' })
  @Length(3, 20, {
    message: 'O tamanho da string diretor deve estar entre 3 à 20 caracteres',
  })
  diretor: string;

  @IsNotEmpty()
  @IsNumber()
  Ano: number;
}
