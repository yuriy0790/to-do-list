import { createSlice } from '@reduxjs/toolkit';

const todoInitialState = {
  items: [],
  fullTodoInfoModal: false,
};

const todoSlice = createSlice({
  name: 'todos',

  initialState: todoInitialState,

  reducers: {
    addTodo(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteTodo(state, { payload }) {
      state.items = state.items.filter(el => el.id !== payload);
    },
    openModalTodo(state, { payload }) {
      state.fullTodoInfoModal = { ...payload };
    },

    closeModalTodo(state) {
      state.fullTodoInfoModal = null;
    },
    setTodoStatus: (state, { payload }) => {
      const { id, status } = payload;
      const todo = state.items.find(todo => todo.id === id);
      if (todo) {
        todo.status = status;
      }
      if (state.fullTodoInfoModal) {
        state.fullTodoInfoModal.status = status;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  openModalTodo,
  closeModalTodo,
  setTodoStatus,
} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
