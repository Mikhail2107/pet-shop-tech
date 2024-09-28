export interface Product {
    discountPercentage: number;
    discountedTotal: number;
    id:  number;
    price: number;
    quantity: number;
    thumbnail:string;
    title: string;
    total: number;
}
export interface Cart {
    discountedTotal: number;
    id: number;
    products: Product[];
    total: number;
    totalProducts:  number;
    totalQuantity:  number;
    userId:  number;
    isLoading: boolean;
    error: null;
}
