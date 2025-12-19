import { Injectable } from '@nestjs/common';

interface Product {
  id: number;
  documentId: string;
  title: string;
  description: string;
  price: number;
  stock: number;
  image: {
    url: string;
  };
}

interface ProductResponse {
  data: Product[];
}

@Injectable()
export class ProductsService {
  private baseUrl = 'https://strapi-production-2ff5.up.railway.app';

  getProducts() {
    return fetch(`${this.baseUrl}/api/creatine-products?populate=*`).then(
      (res) =>
        res.json().then((data: ProductResponse) => ({
          ...data,
          data: data.data.map((item: Product) => ({
            ...item,
            image: `${this.baseUrl}${item.image.url}`,
          })),
        })),
    );
  }

  // 2 endpoints avec les méthodes dans le service associé:
  // - /products
  // - /products/:id
  getProduct(id: string) {
    return fetch(`${this.baseUrl}/api/creatine-products/${id}?populate=*`).then(
      (res) =>
        res.json().then(({ data }: { data: Product }) => ({
          ...data,
          image: `${this.baseUrl}${data.image.url}`,
        })),
    );
  }
}
