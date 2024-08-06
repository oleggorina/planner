import { Injectable } from '@nestjs/common';
import { hash } from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { PrismaService } from 'src/services/prisma.service';
import { UserDto } from './dto/user.dto';
import { startOfDay, subDays } from 'date-fns';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async create(dto: AuthDto) {
        const user = {
            email: dto.email,
            name: '',
            password: await hash(dto.password),
            subscriptionPlan: 'free'
        }

        return this.prisma.user.create({
            data: user
        })
    }

    async update(id: number, dto: UserDto) {
        let data = dto;
        if (dto.password) {
            data = {...dto, password: await hash(dto.password)}
        }
        return this.prisma.user.update({
            where: {
                id
            },
            data,
            select: {
                name: true,
                email: true
            }
        })
    }

    async getProfile(id: number) {
        const profile = await this.getById(id);
        const {password, ...rest} = profile;
        return {
            user: rest
        }
    }

    async getById(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                tasks: true
            }
        })
    }

    async getByEmail(email: string) {
        return this.prisma.user.findUnique({
            where: {
                email
            }
        })
    }
}
