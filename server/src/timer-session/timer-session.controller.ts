import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TimerSessionService } from './timer-session.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { TimerSessionDto } from './dto/timer-session.dto';

@Controller('user/timer-session')
export class TimerSessionController {
  constructor(private readonly timerSessionService: TimerSessionService) {}

  @HttpCode(200)
  @Post()
  @Auth()
  async create(@CurrentUser('id') userId: number) {
    return this.timerSessionService.create(userId);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Body() dto: TimerSessionDto, @CurrentUser('id') userId: number, @Param('id', ParseIntPipe) sessionId: number) {
    return this.timerSessionService.update(dto, sessionId, userId)
  }

  @HttpCode(200)
  @Delete('id')
  @Auth()
  async delete(@Param('id', ParseIntPipe) sessionId: number, @CurrentUser('id') userId: number) {
    return this.timerSessionService.delete(sessionId, userId);
  }

  @Get('today')
  @Auth()
  async getTodaySession(@CurrentUser('id') userId: number) {
    return this.timerSessionService.getTodaySession(userId);
  }
}
