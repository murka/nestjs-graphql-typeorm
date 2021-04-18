import { Field, ID, ObjectType } from '@nestjs/graphql'
import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { BookDTO, BookID } from '../dto/Book.interface'

@Entity({ name: 'book' })
@ObjectType()
export class BookEntity extends BaseEntity implements BookDTO {
  @Field(() => ID)
  @PrimaryGeneratedColumn('increment')
  id: BookID

  @Column('text')
  @Field(() => String)
  name: string

  @Column('text', { nullable: true })
  @Field(() => String, { nullable: true })
  description?: string
}
