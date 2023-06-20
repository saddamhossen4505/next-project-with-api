import { createSlice } from "@reduxjs/toolkit";

// Create CounterSlice.
export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },
    decrement: (state, action) => {
      state.count = state.count - 1;
    },
  },
});

// Export Selector.
export const selectCounter = (state) => state.counter;

// Export Action.
export const { increment, decrement } = CounterSlice.actions;

// Export Reducer.
export default CounterSlice.reducer;
