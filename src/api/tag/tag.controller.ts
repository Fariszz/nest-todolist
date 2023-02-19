import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { JwtAuthGuard } from '../user/auth/auth.guard';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { ResponseHelper } from '@/common/helper/response.helper';
import { Response } from 'express';

@Controller('tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(@Body() createTagDto: CreateTagDto, @Res() res: Response) {
    ResponseHelper.setResponse(res);
    return ResponseHelper.success(this.tagService.create(createTagDto), 'Tag created successfully');
  }
}
