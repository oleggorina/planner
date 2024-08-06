import { Test, TestingModule } from '@nestjs/testing';
import { TimerSettingsService } from './timer-settings.service';

describe('TimerSettingsService', () => {
  let service: TimerSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimerSettingsService],
    }).compile();

    service = module.get<TimerSettingsService>(TimerSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
