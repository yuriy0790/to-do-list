import { createSlice } from '@reduxjs/toolkit';

const todoInitialState = [];

const todoSlice = createSlice({
  name: 'todos',

  initialState: todoInitialState,

  reducers: {
    addTodo(state, { payload }) {
      return [...state, payload];
    },
    deleteTodo(state, { payload }) {
      return state.filter(el => el.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
