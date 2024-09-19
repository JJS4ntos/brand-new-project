import {config} from '../config';
import {PrismaClient} from '@prisma/client';
import {IDBConnection} from './repositories/types';

export class PrismaDBConnection implements IDBConnection<PrismaClient> {
  private static instance: PrismaDBConnection;
  public client: PrismaClient;

  constructor() {
    this.client = new PrismaClient();
  }

  public static get Instance(): PrismaDBConnection {
    if (!PrismaDBConnection.instance) {
      PrismaDBConnection.instance = new PrismaDBConnection();
    }
    return PrismaDBConnection.instance;
  }
}

const globalForPrismaDBConnection = globalThis as unknown as {
  dbConnection: PrismaDBConnection;
};

if (config.nodeEnv !== 'production') {
  globalForPrismaDBConnection.dbConnection = PrismaDBConnection.Instance;
}

export const dbConnection =
  globalForPrismaDBConnection.dbConnection || PrismaDBConnection.Instance;
