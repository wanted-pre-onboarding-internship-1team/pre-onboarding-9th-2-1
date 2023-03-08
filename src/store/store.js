import productSlice from './productSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
