import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  productList: [],
  productListToShow: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state, action) {
      state.productList = state.productListToShow = action.payload;
    },

    filterProductList(state, action) {
      const slideValue = action.payload.slideValue;
      const checkboxValue = action.payload.checkboxValue;
      let filteredProduct = state.productList.filter(
        product =>
          slideValue['min'] <= product.price &&
          product.price <= slideValue['max']
      );

      if (checkboxValue.length > 0) {
        filteredProduct = filteredProduct.filter(product =>
          checkboxValue.includes(product.spaceCategory)
        );
      }
      state.productListToShow = filteredProduct;
    },
  },
});

export const { fetchProductList, filterProductList } = productSlice.actions;
export default productSlice.reducer;
