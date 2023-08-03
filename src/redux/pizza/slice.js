import { createSlice } from '@reduxjs/toolkit';

import { fetchPizzas, fetchPizza } from './asyncActions.js';

const initialState = {
  item: {},
  items: [],
  status: 'pending', // pending (ожидание) | fulfilled (успех) | rejected (ошибка)
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    // PENDING (ОЖИДАНИЕ ВЫПОЛНЕНИЯ)
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = 'pending';
      state.items = [];
    });
    // FULFILLED (УСПЕШНОЕ ВЫПОЛНЕНИЕ)
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'fulfilled';
      state.items = action.payload;
    });
    // REJECTED (ОШИБКА ВЫПОЛНЕНИЯ)
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = 'rejected';
      state.items = [];
    });
    // -------------------------------------------------------------
    // PENDING (ОЖИДАНИЕ ВЫПОЛНЕНИЯ)
    builder.addCase(fetchPizza.pending, (state, action) => {
      state.status = 'pending';
      state.item = [];
    });
    // FULFILLED (УСПЕШНОЕ ВЫПОЛНЕНИЕ)
    builder.addCase(fetchPizza.fulfilled, (state, action) => {
      console.log('action.payload -->', action.payload);
      state.status = 'fulfilled';
      state.item = action.payload;
    });
    // REJECTED (ОШИБКА ВЫПОЛНЕНИЯ)
    builder.addCase(fetchPizza.rejected, (state, action) => {
      state.status = 'rejected';
      state.item = [];
    });
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;
