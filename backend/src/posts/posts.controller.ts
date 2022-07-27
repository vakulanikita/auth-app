import { PostsService } from './posts.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Post as PostEntity } from 'src/entity/post.entity';

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts(): Promise<PostEntity[]> {
    return this.postsService.getPosts();
  }

  @Post()
  createPost(@Body() post: PostEntity) {
    return this.postsService.addPost(post);
  }

  @Get(':id')
  getOnePost(@Param('id') id: string): Promise<PostEntity> {
    return this.postsService.findOne(+id);
  }

  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() post: PostEntity): Promise<PostEntity> {
    return this.postsService.update(+id, post);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string) {
    return this.postsService.delete(+id);
  }
}
