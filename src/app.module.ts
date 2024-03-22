import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CacheModule } from '@nestjs/cache-manager';


@Module({
  imports: [
    CacheModule.register({isGlobal: true}),
    PrismaModule,
    UsersModule

  ],
})
export class AppModule {}
