import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, Res, UseGuards } from '@nestjs/common';
import { TodoService } from './todo.service';
import { JwtAuthGuard } from '../user/auth/auth.guard';
import { CreateTodoDto } from './dto/request/create-todo.dto';
import { ResponseHelper } from '@/common/helper/response.helper';
import { Response, Request } from 'express';
import { User } from '../user/user.entity';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async Create(@Body() createTodoDto: CreateTodoDto, @Res() res: Response, @Req() { user }: Request) {
    ResponseHelper.setResponse(res);
    return ResponseHelper.success(this.todoService.create(createTodoDto, <User>user), 'Todo created Successfully');
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll(
    @Res() res: Response,
    @Req() { user }: Request,
    @Query('tag') tag?: string,
    @Query('completed') completed?: boolean,
  ) {
    ResponseHelper.setResponse(res);
    return ResponseHelper.success(await this.todoService.findAll(<User>user, tag, completed), 'Todo fetched successfully');
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string, @Res() res: Response, @Req() { user }: Request) {
    ResponseHelper.setResponse(res);
    return ResponseHelper.success(this.todoService.findOne(+id, <User>user), 'Todo fetched successfully');
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() createTodoDto: CreateTodoDto, @Res() res: Response, @Req() { user }: Request) {
    ResponseHelper.setResponse(res);
    const todo = await this.todoService.findOne(+id, <User>user);

    if (!todo) {
      return ResponseHelper.notFound('Todo not found');
    }

    if (todo.userId !== (<User>user).id) {
      return ResponseHelper.unauthorized('You are not authorized to update this todo item');
    }

    const updatedTodo = await this.todoService.update(+id, createTodoDto, <User>user);
    return ResponseHelper.success(updatedTodo, 'Todo updated successfully');
  }

  @Delete('delete/:id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string, @Res() res: Response, @Req() { user }: Request) {
    ResponseHelper.setResponse(res);
    const todo = await this.todoService.findOne(+id, <User>user);

    if (!todo) {
      return ResponseHelper.notFound('Todo not found');
    }

    if (todo.userId !== (<User>user).id) {
      return ResponseHelper.unauthorized('You are not authorized to delete this todo item');
    }

    await this.todoService.delete(+id);
    return ResponseHelper.success(null, 'Todo deleted successfully');
  }
}
