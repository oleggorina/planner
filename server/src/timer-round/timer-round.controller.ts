import { Body, Controller, HttpCode, Param, ParseIntPipe, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { TimerRoundService } from './timer-round.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { TimerRoundDto } from './dto/timer-round.dto';

@Controller('user/timer-round')
export class TimerRoundController {
  constructor(private readonly timerRoundService: TimerRoundService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async update(@Param('id', ParseIntPipe) roundId: number, @Body() dto: TimerRoundDto) {
    return this.timerRoundService.updateRound(dto, roundId);
  }
}
