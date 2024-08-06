import { Test, TestingModule } from '@nestjs/testing';
import { TimerRoundController } from './timer-round.controller';
import { TimerRoundService } from './timer-round.service';

describe('TimerRoundController', () => {
  let controller: TimerRoundController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimerRoundController],
      providers: [TimerRoundService],
    }).compile();

    controller = module.get<TimerRoundController>(TimerRoundController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
