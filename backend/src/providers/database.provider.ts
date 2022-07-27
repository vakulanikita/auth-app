import { Post } from 'src/entity/post.entity';
import { createConnection } from 'typeorm';

export const databaseProvider = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'abul.db.elephantsql.com',
        port: 5432,
        username: 'rtyooyqx',
        password: 'mwxdurMGLqXVeYHJpum1OO5ALHb5PZ1H',
        database: 'rtyooyqx',
        entities: [Post],
        synchronize: true
      })
  },
];
