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

  create(data: CreateUserDto) {
    const new_user = this.repo.create(data);
    return this.repo.save(new_user);
  }

  async update(id: number, data: UpdateUserDto) {
    const user = await this.repo.findOneBy({ id, deleted: null });
    Object.assign(user, data);
    return this.repo.save(user);
  }

  findAll(): Promise<UserEntity[]> {
    return this.repo.find();
  }

  findOneByUsername(username: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ username, deleted: null });
  }

  findOneById(id: number): Promise<UserEntity | null> {
    return this.repo.findOneBy({ id, deleted: null });
  }

  findOneByEmail(email: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ email, deleted: null });
  }

  findOneBy(query: object): Promise<UserEntity | null> {
    return this.repo.findOneBy(query);
  }

  findManyBy(query: object): Promise<UserEntity[]> {
    return this.repo.find(query);
  }

  async destroy(id: string): Promise<DeleteResult> {
    const results = await this.repo.softDelete(id);
    return results;
  }
}