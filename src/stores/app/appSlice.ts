import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface App {
  isLoading: boolean,
  authenticated: boolean
}

const initialState: App = {
  isLoading: false,
  authenticated: false
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
    }
  }
});

export const { logIn, logOut, setLoading } = appSlice.actions;

export default appSlice.reducer;