import {IConfig} from './types';

export const config: IConfig = {
  get port() {
    return Number(process.env.PORT) || 3000;
  },
  get jwtSecret() {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined');
    }

    return jwtSecret;
  },
  get nodeEnv() {
    return process.env.NODE_ENV || 'development';
  },
};
