import { Test, TestingModule } from '@nestjs/testing'
import { getRepositoryToken } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { BookEntity } from '../entities/book.entity'
import { BookService } from '../book.service'

describe('BookService', () => {
  let bookservice: BookService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: getRepositoryToken(BookEntity),
          useClass: Repository
        },
      ],
    }).compile()

    bookservice = module.get<BookService>(BookService)
  })

  it('should be defined', () => {
    expect(bookservice).toBeDefined()
  })
})
