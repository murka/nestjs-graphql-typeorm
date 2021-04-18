import { Resolver, Mutation, Query, Args } from '@nestjs/graphql'
import { CreateBookInput } from './dto/CreateBook.input'
import { BookEntity } from './entities/book.entity'
import { BookService } from './book.service'
import { BookDTO } from './dto/Book.interface'

type ID = BookDTO['id']

@Resolver(() => BookEntity)
export class BookResolver {
  constructor(
    private readonly BookService: BookService
  ) {}
  
  @Mutation(() => BookEntity)
  async CreateBook(
    @Args('CreateBookInput')
    createBookInput: CreateBookInput
  ): Promise<BookEntity> {
    return await this.BookService.CreateBook(createBookInput)
  }

  @Query(() => BookEntity)
  async FindOneBook(
    @Args('id') id: ID
  ): Promise<BookEntity> {
    return await this.BookService.FindOneBook(id)
  }
}
