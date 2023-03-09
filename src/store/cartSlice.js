import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {
      const payload = { ...action.payload, isReserved: true, reserveQty: 1 };
      state.cartList = [...state.cartList, payload];
    },

    increaseQty(state, action) {
      const idx = action.payload;
      // const selctedCartItem = state.cartList.filter(item => {
      //   return item.idx === idx;
      // });
      // return state.cartList.map(item => {
      //   if(item.idx !== idx) {
      //     return item
      //   }
      //   return {
      //   ...item,

      //   }
      // })

      // selctedCartItem.reserveQty++;
    },
  },
});

export const { addCart, increaseQty } = cartSlice.actions;
export default cartSlice.reducer;
