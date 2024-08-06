import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { TimerRoundDto } from './dto/timer-round.dto';

@Injectable()
export class TimerRoundService {
    constructor(private prisma: PrismaService) {}

    async updateRound(dto: Partial<TimerRoundDto>, roundId: number) {
        return this.prisma.timerRound.update({
            where: {
                id: roundId
            },
            data: dto
        })
    }
}
