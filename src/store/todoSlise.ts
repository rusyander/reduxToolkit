import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state: any, action) => {
      console.log("state", state);
      console.log("action", action.payload);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload.id
      );
    },
    toggle: (state: any, action) => {
      const togglleTodo = state.todos.find(
        (todo: any) => todo.id === action.payload.id
      );
      togglleTodo.complited = !togglleTodo.complited;
    },
  },
});

export const { addTodo, deleteTodo, toggle } = todoSlice.actions;

export default todoSlice.reducer;
