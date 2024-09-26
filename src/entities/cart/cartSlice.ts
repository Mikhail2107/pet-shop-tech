import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {Cart} from './interface'
// interface CartData {
//   carts: Carts[]; 
//   total: number; 
//   skip: number; 
//   limit: number;
// }
// interface Carts {
//   carts: Cart;
// }
// interface CartItem {
//   discountPercentage: number;
//   discountedTotal: number;
//   id: number;
//   price: number;
//   quantity: number;
//   thumbnail: string;
//   title: string;
//   total: number;
// }
// interface Cart {
//   id: number;
//   products: CartItem[];
//   total: number;
//   discountedTotal: number;
//   userId: number;
//   totalProducts: number;
//   totalQuantity: number;
// }
// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   quantity: number;
//   total: number;
//   discountPercentage: number;
//   discountedTotal: number;
//   thumbnail: string;
// }
interface CartState {
  cart: Cart | [];
  isLoading: boolean;
  error: string | null;
}
const initialState: CartState = {
  cart: [] ,
  isLoading: false,
  error: null,
};

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async function (cartId: number) {
    const response = await fetch(`https://dummyjson.com/carts/user/${cartId}`);

    if (!response.ok) {
      throw new Error('Ошибка получения корзины');    }

    return await response.json();
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
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload.carts[0];
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки корзины';
      });
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;