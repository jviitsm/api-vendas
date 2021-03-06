import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import AppError from '@shared/errors/AppError';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import { hash } from 'bcryptjs';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);

    const checkUserExists = await usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new AppError('Email address already used.');
    }

    const user = usersRepository.create({
      name,
      email,
      password: await hash(password, 8),
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
