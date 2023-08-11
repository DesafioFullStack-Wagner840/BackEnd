import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { getRounds, hashSync } from "bcryptjs";
import { Contacts } from "./contacts.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "integer" })
  phone: number;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date;

  @OneToMany(() => Contacts, (Contacts) => Contacts.user)
  contacts: Contacts[];

  @BeforeInsert()
  @BeforeUpdate()
  transformPasswordHash() {
    const password = getRounds(this.password);

    if (!password) {
      this.password = hashSync(this.password, 10);
    }
  }
}
