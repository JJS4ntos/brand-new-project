import {config} from '../config';
import {sign, verify} from 'jsonwebtoken';
import {IJWT, UserJWT} from './types';

export class JWT implements IJWT {
  async sign(user: UserJWT): Promise<string> {
    const jwtSecret = config.jwtSecret;
    const token = sign(user, jwtSecret, {expiresIn: '15m'});

    return token;
  }

  async verify(token: string): Promise<UserJWT | null> {
    try {
      const jwtSecret = config.jwtSecret;
      const tokenData = verify(token, jwtSecret);
      const user = JSON.parse(JSON.stringify(tokenData)) as UserJWT;

      return user;
    } catch (e) {
      return null;
    }
  }
}
