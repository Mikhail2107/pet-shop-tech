export interface CartProduct {
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
    products: CartProduct[];
    total: number;
    totalProducts:  number;
    totalQuantity:  number;
    userId:  number;
}

export interface CartState {
    items: Cart[];
    isLoading: boolean;
    error: string | null;
}