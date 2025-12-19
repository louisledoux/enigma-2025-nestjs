export interface CreateOrderDto {
  data: {
    body: {
      // Informations du client
      customer: {
        name: string;
        email: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        country: string;
      };
      products: {
        // IDs des produits
        connect: string[];
      };
    };
  };
}

export interface Order {
  products: string[];
  customer: {
    name: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}
