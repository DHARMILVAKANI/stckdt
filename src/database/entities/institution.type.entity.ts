import { BaseEntity } from 'src/database/entities/base.entity';
import { Boards } from 'src/database/entities/boards.entity';
import { User } from 'src/database/entities/user.entity';
import { Column, Entity, OneToMany, OneToOne } from 'typeorm';

@Entity('InstitutionType')
export class InstitutionType extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => User, (user) => user.institutionType)
  users: User[];

  @OneToMany(() => Boards, (bd) => bd.institution)
  boards: Boards[];
}
