import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tag } from './tag.entity';
import { Repository } from 'typeorm';
import { SingleTagDto } from './dto/response/single-tag.dto';
import { CreateTagDto } from './dto/request/create-tag.dto';

@Injectable()
export class TagService {
  @InjectRepository(Tag)
  private readonly repository: Repository<Tag>;

  async create(createTagDto: CreateTagDto): Promise<SingleTagDto> {
    return await this.repository.save(createTagDto);
  }
}
