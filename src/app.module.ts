import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { redisStore } from 'cache-manager-redis-yet';


@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      isGlobal: true
    }),
    CacheModule.registerAsync({ 
      isGlobal: true, 
      useFactory: async (config) => {
        const store = await redisStore({
          ttl: 30 * 1000,
          socket: {
            host: config.get("redis.host"),
            port: config.get("redis.port")
          }
        });
        return { store }
      },
      inject: [ConfigService]
    }),
    PrismaModule,
    UsersModule

  ],
})
export class AppModule { }
