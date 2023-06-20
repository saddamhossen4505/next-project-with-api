import { createUser } from "@/libs/createUser";
import { getAllUser } from "@/libs/getAllUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// FatchAllUser.
export const fatchAllUser = createAsyncThunk("user/fatchAllUser", async () => {
  const users = await getAllUser();
  return users;
});

// CreateUser.
export const userCreate = createAsyncThunk("user/userCreate", async (data) => {
  const user = await createUser(data);
  return user;
});

// Delete User.
export const userDelete = createAsyncThunk("user/userDelete", async (id) => {
  axios.delete(`http://localhost:3000/api/user?id=${id}`);
  return id;
});
