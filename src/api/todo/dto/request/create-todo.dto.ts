import { IsString, IsOptional, IsDate, IsBoolean, IsNumber } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  @IsOptional()
  @IsDate()
  due_time: Date;

  @IsBoolean()
  @IsOptional()
  completed: boolean;

  @IsNumber()
  userId: number;
}
