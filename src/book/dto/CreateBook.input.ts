import { Field, InputType } from '@nestjs/graphql'
import { IsString, MaxLength } from 'class-validator'

import { BookDTO } from './Book.interface'

@InputType()
export class CreateBookInput implements BookDTO {
  @Field()
  @IsString()
  @MaxLength(255)
  name: string

  @Field({ nullable: true })
  @IsString()
  description?: string
}