import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoTag } from './todotag.entity';
import { Repository } from 'typeorm';
import { SingleTodotagDto } from './dto/response/single-todotag.dto';
import { CreateTodoTagDto } from './dto/request/create-todotag.dto';

@Injectable()
export class TodotagService {
  @InjectRepository(TodoTag)
  private readonly todoTagRepository: Repository<TodoTag>;

  public async create(createTodoTagDto: CreateTodoTagDto): Promise<SingleTodotagDto> {
    return this.todoTagRepository.save(createTodoTagDto);
  }
}
