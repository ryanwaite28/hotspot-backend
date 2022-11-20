import { CreateUserDto, UpdateUserDto } from "@common/common";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, Repository } from "typeorm";
import { UserEntity } from "./user.entity";


@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(UserEntity) private readonly repo: Repository<UserEntity>,
  ) {}

  save(data: UserEntity) {
    return this.repo.save(data);
  }

  async create(data: CreateUserDto) {
    const new_user = this.repo.create(data);
    return this.repo.save(new_user);
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.repo.findOne({
      where: { id },
      withDeleted: false
    });
    Object.assign(user, data);
    return this.repo.save(user);
  }

  delete(id: string | number): Promise<DeleteResult> {
    return this.repo.softDelete(id);
  }

  destroy(id: string | number): Promise<DeleteResult> {
    return this.repo.delete(id);
  }



  findAll(): Promise<UserEntity[]> {
    return this.repo.find();
  }

  findOneById(id: number): Promise<UserEntity | null> {
    return this.repo.findOne({
      where: { id },
      withDeleted: false
    }) || null;
  }

  findOneByUsername(username: string): Promise<UserEntity | null> {
    return this.repo.findOne({
      where: { username },
      withDeleted: false
    }) || null;
  }

  findOneByEmail(email: string): Promise<UserEntity | null> {
    return this.repo.findOne({
      where: { email },
      withDeleted: false
    }) || null;
  }

  findOneByPhone(phone: string): Promise<UserEntity | null> {
    return this.repo.findOne({
      where: { phone },
      withDeleted: false
    }) || null;
  }

  findOneBy(where: object): Promise<UserEntity | null> {
    return this.repo.findOne({
      where,
      withDeleted: false
    }) || null;
  }

  findManyBy(where: object): Promise<UserEntity[]> {
    return this.repo.find({
      where,
      withDeleted: false
    });
  }
}