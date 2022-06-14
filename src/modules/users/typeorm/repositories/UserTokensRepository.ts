import { EntityRepository, Repository } from 'typeorm';
import UserToken from '../entities/UserToken';

@EntityRepository(UserToken)
export default class UserTokensRepository extends Repository<UserToken> {
  public async findByToken(token: string): Promise<UserToken | undefined> {
    const user = await this.findOne({ where: { token } });
    return user;
  }

  public async generate(userId: string): Promise<UserToken> {
    const userToken = await this.create({
      user_id: userId,
    });

    await this.save(userToken);

    return userToken;
  }
}
