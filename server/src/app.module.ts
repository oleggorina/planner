import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TimerSettingsModule } from './timer-settings/timer-settings.module';
import { TaskModule } from './task/task.module';
import { StatisticsModule } from './statistics/statistics.module';
import { TimeBlockModule } from './time-block/time-block.module';
import { TimerSessionModule } from './timer-session/timer-session.module';
import { TimerRoundModule } from './timer-round/timer-round.module';
import { HabitModule } from './habit/habit.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, TimerSettingsModule, TaskModule, StatisticsModule, TimeBlockModule, TimerSessionModule, TimerRoundModule, HabitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
