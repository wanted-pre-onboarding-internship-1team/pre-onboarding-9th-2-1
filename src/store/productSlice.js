import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state, action) {
      state.productList = action.payload;
    },
  },
});

export const { fetchProductList } = productSlice.actions;
export default productSlice.reducer;
