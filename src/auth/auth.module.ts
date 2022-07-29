import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from 'src/database/database.module';
import { userProvider } from 'src/providers/user.provider';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: 'super-secret-cat',
    }),
  ],
  controllers: [AuthController],
  providers: [...userProvider, AuthService, JwtStrategy],
})
export class AuthModule {}
