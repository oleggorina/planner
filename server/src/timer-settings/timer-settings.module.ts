import { Module } from '@nestjs/common';
import { TimerSettingsService } from './timer-settings.service';
import { TimerSettingsController } from './timer-settings.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [TimerSettingsController],
  providers: [TimerSettingsService, PrismaService],
  exports: [TimerSettingsService]
})
export class TimerSettingsModule {}
