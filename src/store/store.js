import { configureStore, createSlice } from '@reduxjs/toolkit';

let filterPrice = createSlice({
  name: 'filter',
  initialState: {
    minimumprice: '',
    maximumprice: '',
  },
  reducers: {
    onSavePrice(state, action) {
      return (state = action.payload);
    },
  },
});

let filterContry = createSlice({
  name: 'filter',
  initialState: {
    contry: '',
  },
  reducers: {
    onSaveContry(state, action) {
      return (state = action.payload);
    },
  },
});

export let { onSavePrice } = filterPrice.actions;
export let { onSaveContry } = filterContry.actions;

export default configureStore({
  reducer: {
    filterPrice: filterPrice.reducer,
    filterContry: filterContry.reducer,
  },
});
