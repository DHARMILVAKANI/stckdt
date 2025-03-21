import { BaseEntity } from 'src/database/entities/base.entity';
import { User } from 'src/database/entities/user.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity('Medium')
export class Medium extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => User, (user) => user.medium)
  users: User[];
}
