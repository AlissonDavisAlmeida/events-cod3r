import { Module } from '@nestjs/common';
import { Prisma } from './prisma.provider';

@Module({
  providers: [Prisma],
  exports: [Prisma],
})
export class DbModule { }
