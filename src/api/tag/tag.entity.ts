import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, DeleteDateColumn, OneToMany, UpdateDateColumn } from 'typeorm';
import { TodoTag } from '../todotag/todotag.entity';

@Entity({ name: 'tags' })
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;

  @OneToMany(() => TodoTag, (todoTag) => todoTag.tag)
  todoTags: TodoTag[];
}
