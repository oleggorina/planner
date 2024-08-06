import { Test, TestingModule } from '@nestjs/testing';
import { TimerRoundService } from './timer-round.service';

describe('TimerRoundService', () => {
  let service: TimerRoundService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TimerRoundService],
    }).compile();

    service = module.get<TimerRoundService>(TimerRoundService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
