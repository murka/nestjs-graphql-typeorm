import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AppResolver } from './app.resolver' 
import { TypeORMModule } from './typeorm/typeorm.module'
import { GraphqlModule } from './graphql/graphql.module'
@Module({
  imports: [
    TypeORMModule,
    GraphqlModule
  ],
  controllers: [AppController],
  providers: [AppResolver, AppService],
})
export class AppModule {}
