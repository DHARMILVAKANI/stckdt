import { BaseEntity } from 'src/database/entities/base.entity';
import { InstitutionType } from 'src/database/entities/institution.type.entity';
import { User } from 'src/database/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

@Entity('Boards')
export class Boards extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => User, (user) => user.board)
  users: User[];

  @ManyToOne(() => InstitutionType, (institutionType) => institutionType.boards)
  institution: InstitutionType;
}
