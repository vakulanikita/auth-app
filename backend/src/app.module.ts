import { PostsModule } from './posts/posts.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    PostsModule,
    RouterModule.register([
      {
        path: 'api/posts',
        module: PostsModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
