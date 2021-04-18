import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { BookEntity } from './entities/book.entity'
import { CreateBookInput } from './dto/CreateBook.input'

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private BookRepository: Repository<BookEntity>
  ) {}

  async CreateBook(CreateBookInputData: CreateBookInput): Promise<BookEntity> {
    return await this.BookRepository.save({ ...CreateBookInputData })
  }

  async FindOneBook(id: BookEntity['id']): Promise<BookEntity> {
    return await this.BookRepository.findOne(id)
  }
}
