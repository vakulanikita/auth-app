import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RouterModule } from '@nestjs/core';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    PostsModule,
    AuthModule,
    RouterModule.register([
      {
        path: 'api/posts',
        module: PostsModule,
      },
      {
        path: 'api/auth',
        module: AuthModule,
      },
    ]),
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
