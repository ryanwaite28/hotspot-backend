import { CommonUserEntity } from '@common/common';
import {
  Entity,
} from 'typeorm';



@Entity('users')
export class UserEntity extends CommonUserEntity {}