import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { increment, decrement } from "./action";

function Counter() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.num);
  console.log(state, "state");
  return (
    <div>
      {state}
      <button type="button" onClick={() => dispatch(increment())}>
        Increament
      </button>

      <button type="button" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
