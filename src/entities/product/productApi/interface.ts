export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    returnPolicy: string;
    warrantyInformation: string;

  }
  

 export interface ProductData {
    products: Product[];
    total: number;
    limit: number;
    skip: number;
  }