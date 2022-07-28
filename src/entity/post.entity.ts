import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StatusEnum, CategoryEnum } from './../models/data.model';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.Suggestion,
  })
  status: string;

  @Column({
    type: 'enum',
    enum: CategoryEnum,
    default: CategoryEnum.Enhancement,
  })
  category: string;

  @Column({ default: 0 })
  upvotes: number;

  @Column('text', { default: '' })
  description: string;

  @Column({ default: 0 })
  comments: number;
}
