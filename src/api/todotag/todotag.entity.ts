import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Todo } from '../todo/todo.entity';
import { Tag } from '../tag/tag.entity';

@Entity({ name: 'todo_tags' })
export class TodoTag {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ name: 'todo_id' })
  public todoId!: number;

  @Column({ name: 'tag_id' })
  public tagId!: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @ManyToOne(() => Todo, (todo) => todo.todoTags)
  @JoinColumn({ name: 'todo_id' })
  public todo!: Todo;

  @ManyToOne(() => Tag, (tag) => tag.todoTags)
  @JoinColumn({ name: 'tag_id' })
  public tag!: Tag;
}
