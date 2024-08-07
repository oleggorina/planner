import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { HabitDto } from './dto/habit.dto';

@Injectable()
export class HabitService {
    constructor(private prisma: PrismaService) {}

    async create(dto: HabitDto, userId: number) {
        return this.prisma.habit.create({
            data: {
                ...dto,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
    }

    async update(dto: Partial<HabitDto>, habitId: number, userId) {
        return this.prisma.habit.update({
            where: {
                userId,
                id: habitId
            },
            data: dto
        })
    }

    async delete(habitId: number) {
        return this.prisma.habit.delete({
            where: {
                id: habitId
            }
        })
    }

    async getAll(userId: number) {
        return this.prisma.habit.findMany({
            where: {
                userId
            }
        })
    }
}
