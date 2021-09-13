import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './user-dto';
import { User } from './user.entity';
import { userRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: userRepository,) { }


  public async create(userDto: UserDto,): Promise<User> {
    return await this.userRepository.create(userDto);
  }


  public async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  public async findOne(id: number) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  public async update(id: number, data: Partial<UserDto>) {
    await this.userRepository.update({ id }, data);
    return await this.userRepository.findOne({ id });
  }

  public async remove(id: number) {
    await this.userRepository.delete({ id });
    return { deleted: true };
  }
}
