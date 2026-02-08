import { User } from 'src/users/entities/users.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  // ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: false })
  name: string;
  @Column()
  description: string;
  @Column('decimal', { nullable: false })
  price: number;

  // @ManyToOne(() => User, (user) => user.products, {
  //   eager: true,
  //   cascade: ['insert', 'update'], // it has insert, update, remove, soft-remove, recover value, you can choose which one you want to use
  //   nullable: false, //it means that the product must be associated with a user, and it cannot be null
  // })
  // user: User;

  @ManyToMany(() => User, (user) => user.products)
  @JoinTable() // it is used to create a join table for the many-to-many relationship between products and users
  users: User[];
}
