import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { BookEntity } from './entities/book.entity'
import { CreateBookInput } from './dto/CreateBook.input'
import { BookID } from './dto/Book.interface'

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private BookRepository: Repository<BookEntity>
  ) {}

  async CreateBook(CreateBookInputData: CreateBookInput): Promise<BookEntity> {
    return await this.BookRepository.save({ ...CreateBookInputData })
  }

  async FindOneBook(id: BookID): Promise<BookEntity> {
    return await this.BookRepository.findOne(id)
  }
}
