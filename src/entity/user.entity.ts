import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserStatusEnum } from './../models/data.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: UserStatusEnum,
    default: UserStatusEnum.NotActive
  })
  status: string
}
