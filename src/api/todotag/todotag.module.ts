import { Module } from '@nestjs/common';
import { TodotagController } from './todotag.controller';
import { TodotagService } from './todotag.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../user/auth/auth.module';
import { TodoTag } from './todotag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoTag]), AuthModule],
  controllers: [TodotagController],
  providers: [TodotagService],
})
export class TodotagModule {}
