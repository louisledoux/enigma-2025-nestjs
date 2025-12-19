import { Test, TestingModule } from '@nestjs/testing';
import { VOrderController } from './v_order.controller';

describe('VOrderController', () => {
  let controller: VOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VOrderController],
    }).compile();

    controller = module.get<VOrderController>(VOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
