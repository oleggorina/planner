import { Injectable, NotFoundException} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class TimerSettingsService {
    constructor(private prisma: PrismaService) {}

    async create(sessionId: number) {
        return this.prisma.timerSettings.create({
            data: {
                timerSession: {
                    connect: {
                        id: sessionId
                    }
                }
            }
        })
    }

    async getSettings(sessionId: number) {
        const timerSettings = await this.prisma.timerSettings.findUnique({
            where: {
                timerSessionId: sessionId
            }
        })
        if (!timerSettings) {
            return this.create(sessionId)
        }
        return timerSettings;
    }

    async getIntervalsCount(sessionId: number) {
        const timerSettings = await this.getSettings(sessionId);
        if (!timerSettings.intervalsCount) throw new NotFoundException('Intervals count not found');
        return timerSettings.intervalsCount;
    }
}
