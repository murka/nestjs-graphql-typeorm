import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BookResolver } from '../book.resolver'
import { BookService } from '../book.service'
import { BookEntity } from '../entities/book.entity'

describe('BookResolver', () => {
  let bookresolver: BookResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookResolver,
        BookService,
        {
          provide: getRepositoryToken(BookEntity),
          useClass: Repository
        },
      ],
    }).compile()

    bookresolver = module.get<BookResolver>(BookResolver)
  })

  it('should be defined', () => {
    expect(bookresolver).toBeDefined()
  })
})
