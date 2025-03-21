import { BaseEntity } from 'src/database/entities/base.entity';
import { Boards } from 'src/database/entities/boards.entity';
import { Category } from 'src/database/entities/category.entity';
import { InstitutionType } from 'src/database/entities/institution.type.entity';
import { Medium } from 'src/database/entities/medium.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
@Entity('User')
export class User extends BaseEntity {
  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  phoneNumber: string;

  @Column({ type: 'text' })
  address: string;

  @ManyToOne(() => Category, (category) => category.users)
  @JoinColumn()
  category: Category;

  @ManyToOne(() => InstitutionType, (institutionType) => institutionType.users)
  @JoinColumn()
  institutionType: InstitutionType;

  @ManyToOne(() => Boards, (board) => board.users)
  @JoinColumn()
  board: Boards;

  @ManyToOne(() => Medium, (medium) => medium.users)
  @JoinColumn()
  medium: Medium;
}
