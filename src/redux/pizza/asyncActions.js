import { createAsyncThunk } from '@reduxjs/toolkit';

import pizzaService from '../../services/PizzaService.js';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async ({ currentPage, category, sort, search }, thunkApi) => {
    // thunkApi.dispatch <- если мы хотим сделать dispatch к каким нибудь другим slice или в этом же slice
    // thunkApi.getState() <- узнать какой в данный момент state в redux
    // thunkApi.getState().filter <- обращение к какому-либо state для использования или проверки по каким либо данным
    // thunkApi.signal.aborted = true; <- если мы по какому то условию хотим прервать данный запрос
    // return thunkApi.rejectWithValue('произошла ошибка'); <- если мы хотим вернуть ошибку из данного запроса со своим определением ошибки
    // return thunkApi.fulfillWithValue(response.data); <- если мы хотим вернуть положительный ответ на данный запрос со своим определением
    console.log('thunkApi -->', thunkApi);
    console.log('thunkApi -->', thunkApi.getState());
    const response = await pizzaService.fetchPizzas(currentPage, category, sort, search);
    return thunkApi.fulfillWithValue(response.data);
  },
);

export const fetchPizza = createAsyncThunk('pizza/fetchPizzaStatus', async (id, thunkApi) => {
  const response = await pizzaService.fetchPizza(id);
  return thunkApi.fulfillWithValue(response.data);
});
