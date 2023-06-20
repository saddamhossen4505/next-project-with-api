import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "@/app/todo/todoSlice";
import counterSlice from "@/app/counter/CounterSlice";
import userReducer from "@/app/user/userSlice";
import studentReducer from "@/app/student/studentSlice";

// Create Store.
export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterSlice,
    user: userReducer,
    student: studentReducer,
  },
  devTools: true,
});
