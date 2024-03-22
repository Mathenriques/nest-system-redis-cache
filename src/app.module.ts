import { Module } from '@nestjs/common';
import { PrismaModule } from './config/prisma/prisma.module';


@Module({
  imports: [
    PrismaModule
  ],
})
export class AppModule {}
