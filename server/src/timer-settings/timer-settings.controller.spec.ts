import { Test, TestingModule } from '@nestjs/testing';
import { TimerSettingsController } from './timer-settings.controller';
import { TimerSettingsService } from './timer-settings.service';

describe('TimerSettingsController', () => {
  let controller: TimerSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimerSettingsController],
      providers: [TimerSettingsService],
    }).compile();

    controller = module.get<TimerSettingsController>(TimerSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
