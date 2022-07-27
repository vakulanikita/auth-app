import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { postProvider } from 'src/providers/post.provider';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PostsController],
  providers: [...postProvider, PostsService],
})
export class PostsModule {}
