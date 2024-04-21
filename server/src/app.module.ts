import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsModule } from './polls/polls.module';
import { App } from './app.controller';  
import { redisModule } from './module.config';

@Module({
  imports: [ConfigModule.forRoot(), PollsModule, redisModule],
  controllers: [App], 
  providers: [],
})
export class AppModule {}
