import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/entity/user.entity';
import { InsertResult, DeleteResult, Repository } from 'typeorm';
import { AuthDto } from './dto';
import { MailService } from './../mail/mail.service';

// eslint-disable-next-line
// const users = require('../users.json');

@Injectable()
export class AuthService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
    private mailService: MailService
  ) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOneById(id: number): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        email,
      },
    });
  }

  async addUser(user: User): Promise<InsertResult> {
    user.securityPinCode = 112211
    await this.mailService.sendUserConfirmation(user, '123')
    return this.usersRepository.insert(user);
  }

  async update(id: number, user: User): Promise<User> {
    const userToUpdate = await this.findOneById(id);
    if (userToUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.usersRepository.update(id, user);
    return this.findOneById(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    const userToDelete = await this.findOneById(id);
    if (userToDelete === undefined) {
      throw new NotFoundException();
    }
    return this.usersRepository.delete(id);
  }

  async signinLocal(dto: AuthDto) {
    // retrieve user
    const user = await this.findOneByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Credentials incorrect');
    if (user.password !== dto.password) throw new UnauthorizedException('Credentials incorrect');
    return this.signUser(user.id, user.email, 'user');
  }

  signUser(userId: number, email: string, type: string) {
    return this.jwtService.sign({
      sub: userId,
      email,
      type
    });
  }
}
