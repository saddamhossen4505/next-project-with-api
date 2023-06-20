import { fatchAllUser, userCreate, userDelete } from "./userApi";

const { createSlice } = require("@reduxjs/toolkit");

// Create UserSlice.
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fatchAllUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(userCreate.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(userDelete.fulfilled, (state, action) => {
        state.users = state.users.filter((data) => data._id !== action.payload);
      });
  },
});

// Export Selector.
export const userSelect = (state) => state.user;

// Export Actions.

// Export Reducer.
export default userSlice.reducer;
