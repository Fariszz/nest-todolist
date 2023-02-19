import { Todo } from '../../todo.entity';

export class SingleTodoDto {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  due_time: Date;
  userId: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;

  static fromEntity(entity: Todo): SingleTodoDto {
    const dto = new SingleTodoDto();

    dto.id = entity.id;
    dto.title = entity.title;
    dto.description = entity.description;
    dto.completed = entity.completed;
    dto.due_time = entity.due_time;
    dto.userId = entity.userId;
    dto.created_at = entity.created_at;
    dto.updated_at = entity.updated_at;
    dto.deleted_at = entity.deleted_at;

    return dto;
  }
}
