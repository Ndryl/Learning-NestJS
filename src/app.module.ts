import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrudFilmesModule } from './crud-filmes/crud-filmes.module';
import { MiddlewareModule } from './middleware/middleware.module';
import { PipesModule } from './pipes/pipes.module';

@Module({
  imports: [CrudFilmesModule, MiddlewareModule, PipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
