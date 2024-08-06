import { Module } from '@nestjs/common';
import { TimerRoundService } from './timer-round.service';
import { TimerRoundController } from './timer-round.controller';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [TimerRoundController],
  providers: [TimerRoundService, PrismaService],
})
export class TimerRoundModule {}
