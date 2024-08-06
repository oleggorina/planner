import { Module } from '@nestjs/common';
import { TimerSessionService } from './timer-session.service';
import { TimerSessionController } from './timer-session.controller';
import { PrismaService } from 'src/services/prisma.service';
import { TimerSettingsModule } from 'src/timer-settings/timer-settings.module';

@Module({
  imports: [TimerSettingsModule],
  controllers: [TimerSessionController],
  providers: [TimerSessionService, PrismaService],
})
export class TimerSessionModule {}
