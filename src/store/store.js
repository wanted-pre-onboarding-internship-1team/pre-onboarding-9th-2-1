import { configureStore, createSlice } from '@reduxjs/toolkit';

// 상세 정보
let detailInfo = createSlice({
  name: 'detailInfo',
  initialState: {
    idx: '',
    name: '',
    mainImage: '',
    description: '',
    spaceCategory: '',
    price: '',
    maximumPurchases: '',
    registrationDate: '',
  },
  reducers: {
    changeinfo(state, action) {
      return (state = action.payload);
    },
  },
});

// 장바구니
let cart = createSlice({
  name: 'cart',
  initialState: [{}],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },
  },
});

export let { changeinfo } = detailInfo.actions;
export let { addProduct } = cart.actions;

export default configureStore({
  reducer: {
    detailInfo: detailInfo.reducer,
    cart: cart.reducer,
  },
});
