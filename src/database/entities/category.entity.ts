import { BaseEntity } from 'src/database/entities/base.entity';
import { InstitutionType } from 'src/database/entities/institution.type.entity';
import { User } from 'src/database/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity('Category')
export class Category extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'jsonb' })
  standards: string[];

  @OneToMany(() => User, (user) => user.category)
  users: User[];
}
