import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
interface Cart {
  cart: any;
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}
interface CartState {
  cart: Cart ; 
  isLoading: boolean;
  error: string | null;
}

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async function (cartId: number) {
    const response = await fetch(`https://dummyjson.com/carts/user/${cartId}`);

    if (!response.ok) {
      throw new Error('Ошибка получения корзины');
    }

    return await response.json();
  }
);

const initialState: CartState = {
  cart: null,
  isLoading: false,
  error: null,
};

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
        state.cart = action.payload; 
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка загрузки корзины';
      });
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;