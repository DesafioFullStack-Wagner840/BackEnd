import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { User } from "./users.entity";

@Entity("contacts")
export class Contacts {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "integer" })
  userId: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 45 })
  email: string;

  @Column({ type: "integer" })
  phone: number;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.contacts)
  user: User;
}
