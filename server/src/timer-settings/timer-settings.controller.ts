import { Controller} from '@nestjs/common';
import { TimerSettingsService } from './timer-settings.service';

@Controller('user/timer-settings')
export class TimerSettingsController {
  constructor(private readonly timerSettingsService: TimerSettingsService) {}
}
