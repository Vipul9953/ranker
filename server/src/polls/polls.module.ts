// polls.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.controller'; // Corrected import

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [PollsController],
  providers: [],
})
export class PollsModule {}
