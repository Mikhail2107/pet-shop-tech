import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from './interface';

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  products: CartItem[];
  totalUniqueItems: number;
  totalPriceWithoutDiscount: number;
  totalPrice: number;
  isLoading: boolean;
  error: string | null;
  cartId: number | null; // Добавлен ID корзины
}

const initialState: CartState = {
  products: [],
  totalUniqueItems: 0,
  totalPriceWithoutDiscount: 0,
  totalPrice: 0,
  isLoading: false,
  error: null,
  cartId: null, // Изначально ID корзины не известен
};

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async function (userId: number, { rejectWithValue }) {
    try {
      const response = await fetch(`https://dummyjson.com/carts/user/${userId}`);
      if (!response.ok) {
        throw new Error('Ошибка получения корзины');
      }

      const data = await response.json();
      const cartData = data.carts[0];

      if (!cartData) {
        // Если корзина не найдена, создаем новую
        const createResponse = await fetch('https://dummyjson.com/carts/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: userId,
            products: [],
          }),
        });

        if (!createResponse.ok) {
          throw new Error('Ошибка создания корзины');
        }

        const createData = await createResponse.json();
        return {
          products: [],
          cartId: createData.id,
          ...calculateTotals([]), 
        };
      } 

      const products: CartItem[] = cartData.products.map((product: Product) => ({
        ...product,
        quantity: product.quantity || 1,
      }));

      return {
        products,
        cartId: cartData.id,
        ...calculateTotals(products),
      };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Произошла ошибка');
    }
  }
);


export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async function (
    { products }: { products: { id: number; quantity: number }[] },
    { getState, rejectWithValue }
  ) {
    try {
      const state = getState() as { cartSlice: CartState };
      const cartId = state.cartSlice.cartId;

      if (!cartId) {
        throw new Error('Корзина не найдена'); 
      }

      const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
        method: 'PUT', 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          merge: true,
          products: products,
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка обновления корзины'); 
      }

      const data = await response.json();
      return {
        products: data.products,
      };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Произошла ошибка'); 
    }
  }
);

const calculateTotals = (products: CartItem[]): {
  totalUniqueItems: number;
  totalPriceWithoutDiscount: number;
  totalPrice: number;
} => {
  const totalUniqueItems = products.reduce((acc, item) => acc + item.quantity, 0);
  const totalPriceWithoutDiscount = +products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ).toFixed(2);
  const totalPrice = +products.reduce((acc, item) => {
    const discountAmount = (item.price * item.discountPercentage) / 100;
    const priceWithDiscount = item.price - discountAmount;
    return acc + priceWithDiscount * item.quantity;
  }, 0).toFixed(2);
  return { totalUniqueItems, totalPriceWithoutDiscount, totalPrice };
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
        state.products = action.payload.products;
        state.cartId = action.payload.cartId;
        state.totalUniqueItems = action.payload.totalUniqueItems;
        state.totalPriceWithoutDiscount = action.payload.totalPriceWithoutDiscount;
        state.totalPrice = action.payload.totalPrice;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string; 
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.products = action.payload.products; 
        const totals = calculateTotals(state.products);
        state.totalUniqueItems = totals.totalUniqueItems;
        state.totalPriceWithoutDiscount = totals.totalPriceWithoutDiscount;
        state.totalPrice = totals.totalPrice;
      });
  },
});

export default cartSlice.reducer;
