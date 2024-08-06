import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { TimerSessionDto } from './dto/timer-session.dto';
import { TimerSettingsService } from 'src/timer-settings/timer-settings.service';

@Injectable()
export class TimerSessionService {
    constructor(private prisma: PrismaService, private timerSettings: TimerSettingsService) {}

    async create(userId: number) {
        const todaySession = await this.getTodaySession(userId);
        if (todaySession) return todaySession;

        const newSession = await this.prisma.timerSession.create({
            data: {
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });

        await this.timerSettings.create(newSession.id);
        const intervalsCount = await this.timerSettings.getIntervalsCount(newSession.id);

        return this.prisma.timerSession.update({
            where: {id: newSession.id},
            data: {
                timerRounds: {
                    createMany: {
                        data: Array.from({length: intervalsCount}, () => ({
                            totalSeconds: 0
                        }))
                    }
                }
            },
            include: {
                timerRounds: true
            }
        })
    }

    async update(dto: Partial<TimerSessionDto>, sessionId: number, userId: number) {
        return this.prisma.timerSession.update({
            where: {
                userId,
                id: sessionId
            },
            data: dto
        })
    }

    async delete(sessionId: number, userId: number) {
        return this.prisma.timerSession.delete({
            where: {
                id: sessionId,
                userId
            }
        })
    }

    async getTodaySession(userId: number) {
        const today = new Date().toISOString().split('T')[0];
        return this.prisma.timerSession.findFirst({
            where: {
                createdAt: {
                    gte: new Date(today)
                },
                userId
            },
            include: {
                timerRounds: {
                    orderBy: {
                        id: 'asc'
                    }
                }
            }
        })
    }
}
