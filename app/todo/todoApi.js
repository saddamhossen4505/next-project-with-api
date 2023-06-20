import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fatch all todos.
export const fatchAllTodos = createAsyncThunk(
  "todo/fatchAllTodos",
  async () => {
    const response = await axios.get("http://localhost:3000/api/todo");
    return response.data.todos;
  }
);

// Create todo.
export const createTodo = createAsyncThunk("todo/createTodo", async (data) => {
  const response = await axios.post("http://localhost:3000/api/todo", data);
  return response.data.todo;
});

// Delete todo.
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id) => {
  await axios.delete(`http://localhost:3000/api/todo?id=${id}`);
  return id;
});
