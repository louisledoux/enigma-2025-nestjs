import { Test, TestingModule } from '@nestjs/testing';
import { VOrderService } from './v_order.service';

describe('VOrderService', () => {
  let service: VOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VOrderService],
    }).compile();

    service = module.get<VOrderService>(VOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
