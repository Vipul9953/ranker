// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsModule } from './polls/polls.module';
import { App } from './app.controller';  

@Module({
  imports: [ConfigModule.forRoot(), PollsModule],
  controllers: [App], 
  providers: [],
})
export class AppModule {}
