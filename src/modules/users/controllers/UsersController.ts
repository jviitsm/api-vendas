import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import User from '../typeorm/entities/User';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = listUser.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}