import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
// import { MongooseModule } from '@nestjs/mongoose';
// import { VOrderModule } from './v_order/v_order.module';
import { OrderController } from './order/order.controller';
import { OrderService } from './order/order.service';

@Module({
  imports: [
    // VOrderModule,
    // MongooseModule.forRoot(process.env.MONGO_URI || ''),
  ],
  controllers: [AppController, ProductsController, OrderController],
  providers: [AppService, Logger, ProductsService, OrderService],
})
export class AppModule {}
