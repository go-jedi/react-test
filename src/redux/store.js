import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filter/slice.js';
import cartReducer from './cart/slice.js';
import pizzaReducer from './pizza/slice.js';

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    pizza: pizzaReducer,
  },
});
