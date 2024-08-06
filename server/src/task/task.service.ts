import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TaskService {
    constructor(private prisma: PrismaService) {}

    async create(dto: TaskDto, userId: number) {
        return this.prisma.task.create({
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

    async update(dto: Partial<TaskDto>, taskId: number, userId: number) {
        return this.prisma.task.update({
            where: {
                userId,
                id: taskId
            },
            data: dto
        })
    }

    async delete(taskId: number) {
        return this.prisma.task.delete({
            where: {
                id: taskId
            }
        })
    }

    async getAll(userId: number) {
        return this.prisma.task.findMany({
            where: {
                userId
            }
        })
    }
}
