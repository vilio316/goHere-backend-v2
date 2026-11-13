
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service.js';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [PrismaService],
  imports: [ConfigModule],
  exports: [PrismaService],
})
export class PrismaModule {}
