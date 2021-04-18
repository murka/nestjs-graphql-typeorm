import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'


@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: 'test_database',
      type: 'postgres',
      port: 5432,
      host: 'alpha',
      username: 'postgres',
      password: 'password',
      autoLoadEntities: true,
      synchronize: true,
    })
  ],
  controllers: [],
  providers: [],
})
export class TypeORMModule {}