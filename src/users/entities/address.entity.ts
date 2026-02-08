import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users.entity';

@Entity('addresses')
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  street: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  zipCode: string;

  @OneToOne(() => User, (user) => user.address)
  @JoinColumn()
  user: User;
}
