import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './v_order.schema';
import { VOrderController } from './v_order.controller';
import { VOrderService } from './v_order.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  controllers: [VOrderController],
  providers: [VOrderService],
})
export class VOrderModule {}
