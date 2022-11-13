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
    const user = await this.repo.findOneBy({ id });
    Object.assign(user, data);
    return this.repo.save(user);
  }

  findAll(): Promise<UserEntity[]> {
    return this.repo.find();
  }

  findOneByUsername(username: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ username });
  }

  findOneById(id: number): Promise<UserEntity | null> {
    return this.repo.findOneBy({ id });
  }

  findOneByEmail(email: string): Promise<UserEntity | null> {
    return this.repo.findOneBy({ email });
  }

  async remove(id: string): Promise<DeleteResult> {
    const results = await this.repo.delete(id);
    return results;
  }
}