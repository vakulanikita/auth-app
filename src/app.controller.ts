import { User } from 'src/entity/user.entity';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { GetCurrentUserById } from './utils';
import { JwtAuthGuard } from './utils/guards/jwt-guard.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @UseGuards(JwtAuthGuard)
  @Get()
  getHello(@GetCurrentUserById() userId: number): string {
    console.log(userId);
    return this.appService.getHello();
  }
}
