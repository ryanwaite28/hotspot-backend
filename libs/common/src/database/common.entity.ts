import {
  Column,
  Generated,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  VersionColumn,
} from 'typeorm';



export abstract class CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated("uuid")
  uuid: string

  @CreateDateColumn()
  created: string;

  @UpdateDateColumn()
  updated: string;

  @DeleteDateColumn()
  deleted: string;

  @VersionColumn()
  version: string;
}



export abstract class CommonUserEntity extends CommonEntity {
  @Column({ nullable: true, default: '' })
  sex: string;

  @Column({ nullable: true, default: '' })
  gender: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  displayname: string;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: true, default: '' })
  phone: string;

  @Column({ nullable: true, default: '' })
  bio: string;

  @Column({ nullable: true, default: '' })
  icon_link: string;

  @Column({ nullable: true, default: '' })
  icon_id: string;

  @Column({ nullable: true, default: '' })
  wallpaper_link: string;

  @Column({ nullable: true, default: '' })
  wallpaper_id: string;

  @Column({ nullable: false, default: true })
  is_public: boolean;

  @Column({ nullable: false, default: false })
  person_verified: boolean;

  @Column({ nullable: false, default: false })
  email_verified: boolean;

  @Column({ nullable: false, default: false })
  phone_verified: boolean;

  @Column({ nullable: false, default: false })
  deactivated: boolean;
}
