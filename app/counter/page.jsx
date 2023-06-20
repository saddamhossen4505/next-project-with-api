"use client";

import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCounter } from "./CounterSlice";

const CounterPage = () => {
  const { count } = useSelector(selectCounter);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())}>--</button>
      <button onClick={() => dispatch(increment())}>++</button>
    </>
  );
};

export default CounterPage;
