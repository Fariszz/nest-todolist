import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { TodotagService } from './todotag.service';
import { ResponseHelper } from '@/common/helper/response.helper';
import { JwtAuthGuard } from '../user/auth/auth.guard';
import { CreateTodoTagDto } from './dto/request/create-todotag.dto';
import { Response } from 'express';

@Controller('todotag')
export class TodotagController {
  constructor(private readonly todoTagService: TodotagService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async Create(@Body() createTodoTagDto: CreateTodoTagDto, @Res() res: Response) {
    ResponseHelper.setResponse(res);
    return ResponseHelper.success(this.todoTagService.create(createTodoTagDto), 'TodoTag created Successfully');
  }
}
