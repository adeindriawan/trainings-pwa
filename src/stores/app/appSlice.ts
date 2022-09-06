import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Course } from 'stores/courses';

export interface App {
  isLoading: boolean,
  authenticated: boolean,
  cart: Array<Course>
}

const initialState: App = {
  isLoading: false,
  authenticated: false,
  cart: []
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    logOut: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    addToCart: (state, action: PayloadAction<Course>) => {
      state.cart.push(action.payload);
    },
    updateCart: (state, action: PayloadAction<Array<Course>>) => {
      state.cart = action.payload;
    }
  }
});

export const { logIn, logOut, setLoading, addToCart, updateCart } = appSlice.actions;

export default appSlice.reducer;