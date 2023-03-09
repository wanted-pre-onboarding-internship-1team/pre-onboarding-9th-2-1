import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem(state, action) {
      const payload = { ...action.payload, isReserved: true, reserveQty: 1 };
      state.cartList = [...state.cartList, payload];
    },

    deleteCartItem(state, action) {
      let newState = state.cartList.slice();
      const idx = action.payload;
      const result = newState.filter(item => {
        return item.idx !== idx;
      });
      state.cartList = result;
    },

    increaseQty(state, action) {
      let newState = state.cartList.slice();
      const idx = action.payload;

      newState.map(item => {
        if (item.idx !== idx) {
          return item;
        } else {
          if (item.reserveQty < item.maximumPurchases) {
            item.reserveQty++;
            return {
              ...item,
            };
          } else {
            return {
              item,
            };
          }
        }
      });
    },

    decreaseQty(state, action) {
      let newState = state.cartList.slice();
      const idx = action.payload;

      newState.map(item => {
        if (item.idx !== idx) {
          return item;
        } else {
          if (item.reserveQty > 1) {
            item.reserveQty--;
            return {
              ...item,
            };
          } else {
            return {
              item,
            };
          }
        }
      });
    },
  },
});

export const { addCartItem, deleteCartItem, increaseQty, decreaseQty } =
  cartSlice.actions;
export default cartSlice.reducer;
