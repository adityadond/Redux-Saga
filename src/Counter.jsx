import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { increment, decrement } from "./action";
import Calendar from "./Calender";

function Counter() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer.num);
  console.log(state, "state");
  return (
    <>
      <div>
        {state}
        <button type="button" onClick={() => dispatch(increment())}>
          Increament
        </button>

        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <div style={{ margin: "20px" }}>
        calender
        <Calendar />
      </div>
    </>
  );
}

export default Counter;
