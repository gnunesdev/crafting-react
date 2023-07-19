import { configureStore, createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: ['Estudar redux', 'Fazer café'],
  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
