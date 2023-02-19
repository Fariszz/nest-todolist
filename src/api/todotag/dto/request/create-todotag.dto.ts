import { IsNumber } from 'class-validator';

export class CreateTodoTagDto {
  @IsNumber()
  todoId: number;

  @IsNumber()
  tagId: number;
}
