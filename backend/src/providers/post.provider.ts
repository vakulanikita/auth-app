import { Provider } from '@nestjs/common';
import { Post } from 'src/entity/post.entity';
import { Connection } from 'typeorm';

export const postProvider: Provider[] = [
  {
    provide: 'POSTS_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Post),
    inject: ['DATABASE_CONNECTION'],
  },
];
