import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { TodoTag } from '../todotag/todotag.entity';

@Entity({ name: 'todos' })
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'boolean' })
  completed: boolean;

  @Column({ type: 'timestamp', nullable: true, name: 'due_time' })
  due_time: Date;

  @Column({ name: 'user_id' })
  userId: number;

  @ManyToOne(() => User, (user) => user.todos)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @OneToMany(() => TodoTag, (todoTag) => todoTag.todo)
  todoTags: TodoTag[];
}
