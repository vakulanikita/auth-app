import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, ConfirmationDto, ResendDto } from './dto';
import { User } from 'src/entity/user.entity';
import { GetCurrentUserById } from 'src/utils';
import { JwtAuthGuard } from 'src/utils/guards/jwt-guard.guard';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getUser(@GetCurrentUserById() userId: number): object {
    const user = this.authService.findOneById(userId).then((res) => {
      const { email, firstName, lastName } = res;
      return { email, firstName, lastName };
    });

    return user;
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.authService.getUsers();
  }

  // @Get(':id')
  // getOneUser(@Param('id') id: string): Promise<User> {
  //   return this.authService.findOneById(+id);
  // }

  @Post('signup')
  createUser(@Body() user: User) {
    return this.authService.addUser(user);
  }

  @Post('login')
  signinLocal(@Body() dto: AuthDto) {
    return this.authService.signinLocal(dto);
  }

  @Post('confirmation')
  confirmAccount(@Body() dto: ConfirmationDto): object {
    return this.authService.confirmUser(dto.pinCode, dto.email);
  }

  @Post('resend')
  resendConfirmEmail(@Body() dto: ResendDto) {
    return this.authService.resendConfirmEmail(dto.email);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.authService.update(+id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.authService.delete(+id);
  }
}
