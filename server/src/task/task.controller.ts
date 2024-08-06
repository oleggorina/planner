import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { TaskDto } from './dto/task.dto';

@Controller('user/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async create(@Body() dto: TaskDto, @CurrentUser('id') userId: number) {
    return this.taskService.create(dto, userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Body() dto: TaskDto, @CurrentUser('id') userId: number, @Param('id', ParseIntPipe) taskId: number) {
    return this.taskService.update(dto, taskId, userId);
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async delete(@Param('id', ParseIntPipe) taskId: number) {
    return this.taskService.delete(taskId);
  }

  @Get()
  @Auth()
  async getAll(@CurrentUser('id') userId: number) {
    return this.taskService.getAll(userId);
  }
}
