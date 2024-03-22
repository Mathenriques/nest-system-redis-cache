import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';


@Module({
  imports: [
    CacheModule.register({ 
      isGlobal: true, 
      ttl: 30 * 1000,
      store: redisStore
    }),
    PrismaModule,
    UsersModule

  ],
})
export class AppModule { }
