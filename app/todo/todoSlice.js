import { createSlice } from "@reduxjs/toolkit";
import { createTodo, deleteTodo, fatchAllTodos } from "./todoApi";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fatchAllTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((data) => data._id !== action.payload);
      });
  },
});

// Export Selector.
export const selectTodos = (state) => state.todo;

// Export Action.
export const {} = todoSlice.actions;

// Export Reducer.
export default todoSlice.reducer;
