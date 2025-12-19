import { Injectable } from '@nestjs/common';
import { CreateOrderDto, Order } from './order.interface';

@Injectable()
export class OrderService {
  private baseUrl = 'https://strapi-production-2ff5.up.railway.app';

  createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    return fetch(`${this.baseUrl}/api/orders`, {
      method: 'POST',
      body: JSON.stringify(createOrderDto),
    }).then((res) => res.json());
  }

  getOrders(): Promise<Order[]> {
    return fetch(`${this.baseUrl}/api/orders`).then((res) => res.json());
  }
}
