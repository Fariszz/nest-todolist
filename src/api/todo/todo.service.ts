import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todo.entity';
import { Repository } from 'typeorm';
import { SingleTodoDto } from './dto/response/single-todo.dto';
import { CreateTodoDto } from './dto/request/create-todo.dto';
import { User } from '../user/user.entity';

@Injectable()
export class TodoService {
  @InjectRepository(Todo)
  private readonly repository: Repository<Todo>;

  public async findAll(user: User, tag?: string, completed?: boolean): Promise<SingleTodoDto[] | never> {
    // Get All Data from Todo Table or filter by tag or category
    const query = this.repository.createQueryBuilder('todo');
    query.leftJoinAndSelect('todo.todoTags', 'todoTag');
    query.leftJoinAndSelect('todoTag.tag', 'tag');
    query.leftJoinAndSelect('todo.user', 'user');
    query.where('user.id = :userId', { userId: user.id });

    if (tag) {
      console.log('tag running');
      query.andWhere('tag.name = :tag', { tag });
    }

    if (completed === true) {
      query.andWhere('todo.completed = :completed', { completed });
    }

    if (completed === false) {
      query.andWhere('todo.completed = :completed', { completed });
    }

    const todos: Todo[] = await query.getMany();

    if (!todos) {
      throw new HttpException('No Data found', HttpStatus.NOT_FOUND);
    }

    return todos;
  }

  public async findOne(id: number, user: User): Promise<SingleTodoDto | never> {
    const todo: Todo = await this.repository.findOne({
      where: { id, userId: user.id },
    });

    if (!todo) {
      throw new HttpException('No Data found', HttpStatus.NOT_FOUND);
    }

    return todo;
  }

  public async create(createTodoDto: CreateTodoDto, user: User): Promise<SingleTodoDto | never> {
    const todo: Todo = new Todo();

    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.due_time = createTodoDto.due_time;
    todo.completed = createTodoDto.completed;
    todo.userId = user.id;

    return this.repository.save(createTodoDto);
  }

  public async update(id: number, createTodoDto: CreateTodoDto, user: User): Promise<SingleTodoDto | never> {
    const todo: Todo = await this.repository.findOne(id);

    if (!todo) {
      throw new HttpException('No Data found', HttpStatus.NOT_FOUND);
    }

    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.due_time = createTodoDto.due_time;
    todo.completed = createTodoDto.completed;
    todo.userId = user.id;

    return this.repository.save(todo);
  }

  public async delete(id: number): Promise<SingleTodoDto | never> {
    const todo: Todo = await this.repository.findOne(id);

    if (!todo) {
      throw new HttpException('No Data found', HttpStatus.NOT_FOUND);
    }

    return this.repository.remove(todo);
  }
}
