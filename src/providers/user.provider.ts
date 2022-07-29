import { Provider } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Connection } from 'typeorm';

export const userProvider: Provider[] = [
  {
    provide: 'USERS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
];
