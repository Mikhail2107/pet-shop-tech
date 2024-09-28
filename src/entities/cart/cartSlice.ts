import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Product {
  discountPercentage: number;
  discountedTotal: number;
  id: number;
  price: number;
  quantity: number;
  thumbnail:string;
  title: string;
  total: number;
}

interface Cart {  
  discountedTotal: number;
  id: number;
  products: Product[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
  isLoading: false,
  error: null
}
interface CartState {
  cart: Cart | null;  
  isLoading: boolean;
  error: null | string;
}

const initialState: CartState = {
  cart: null, 
  isLoading: false,
  error: null
};

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async function (userId: number) {
    const response = await fetch(`https://dummyjson.com/carts/user/${userId}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Ошибка получения корзины');    
    }
    const data = await response.json();
    const carts = await data.carts[0];
        
    return carts
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки корзины';
        console.error('Ошибка загрузки корзины:', action.error);
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;        
      })
  },
});

export const {} = cartSlice.actions;
export default cartSlice.reducer;
