import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { HabitService } from './habit.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { HabitDto } from './dto/habit.dto';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user/habit')
export class HabitController {
  constructor(private readonly habitService: HabitService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: HabitDto, @CurrentUser('id') userId: number) {
    return this.habitService.create(dto, userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Body() dto: HabitDto, @CurrentUser('id') userId, @Param('id', ParseIntPipe) habitId: number) {
    return this.habitService.update(dto, habitId, userId);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id', ParseIntPipe) habitId: number) {
    return this.habitService.delete(habitId);
  }

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: number) {
    return this.habitService.getAll(userId);
  }
}
