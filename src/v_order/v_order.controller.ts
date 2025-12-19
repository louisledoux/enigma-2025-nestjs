import { Body, Controller, Get, Post } from '@nestjs/common';
import { type CreateOrderDto, VOrderService } from './v_order.service';
import { Order } from './v_order.schema';

@Controller('v-order')
export class VOrderController {
  constructor(private readonly vOrderService: VOrderService) {}

  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.vOrderService.create(createOrderDto);
  }

  @Get()
  getOrders(): Promise<Order[]> {
    return this.vOrderService.findAll();
  }
}
