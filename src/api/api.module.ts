import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TodoModule } from './todo/todo.module';
import { TagModule } from './tag/tag.module';
import { TodotagModule } from './todotag/todotag.module';

@Module({
  imports: [UserModule, TodoModule, TagModule, TodotagModule],
})
export class ApiModule {}
