import { Resolver, Query, Args } from '@nestjs/graphql'

@Resolver()
export class AppResolver {
  @Query(() => String)
  hello(
    @Args('name') name: string
  ) {
    return `Hello, ${name || 'World'}!`
  }
}