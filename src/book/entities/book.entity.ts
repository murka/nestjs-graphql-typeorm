import { Field, ObjectType } from '@nestjs/graphql'
import { Entity, BaseEntity, Column, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { BookDTO } from '../dto/Book.interface'

@Entity({ name: 'book' })
@ObjectType()
export class BookEntity extends BaseEntity implements BookDTO {
  @Field(() => Number)
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column('text')
  @Field(() => String)
  name: string

  @Column('text', { nullable: true })
  @Field(() => String, { nullable: true })
  description?: string
}
