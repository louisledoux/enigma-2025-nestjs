import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { ProductsService } from './products/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VOrderModule } from './v_order/v_order.module';

@Module({
  imports: [VOrderModule, MongooseModule.forRoot(process.env.MONGO_URI || '')],
  controllers: [AppController, ProductsController],
  providers: [AppService, Logger, ProductsService],
})
export class AppModule {}
