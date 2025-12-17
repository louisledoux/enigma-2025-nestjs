import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts() {
    return fetch(
      'https://strapi-production-2ff5.up.railway.app/api/poke-products?populate=*',
    ).then((res) => res.json());
  }
}
