import { Module } from '@nestjs/common'
import { GraphQLModule, GraphQLSchemaHost } from '@nestjs/graphql'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
      debug: true, // TODO: Add the check for ENV on production mode
      playground: true, // TODO: self too,
    }),
    GraphQLSchemaHost,
  ],
})
export class GraphqlModule {}
