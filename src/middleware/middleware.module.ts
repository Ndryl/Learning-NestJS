import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { MiddlewareController } from './middleware.controller';
import { LogarMiddleware } from './logar/logar.middleware';

@Module({
  controllers: [MiddlewareController],
})
export class MiddlewareModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LogarMiddleware).forRoutes(MiddlewareController);

    //Outra forma de definir rotas de aplicação:
    // consumer
    //   .apply(LogarMiddleware)
    //   .forRoutes({ path: '/middlware', method: RequestMethod.ALL });

    //Terceira forma de aplicaçaõ de rotas:
    consumer
      .apply(LogarMiddleware)
      .exclude({ path: '/middlware/sem', method: RequestMethod.ALL });
  }
}
