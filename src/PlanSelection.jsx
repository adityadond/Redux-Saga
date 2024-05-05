import React from "react";
import { useSelector } from "react-redux";

function PlanSelection() {
  const state = useSelector((state) => state.sagaReducer.dates);
  console.log(state);
  return <div>PlanSelection {state.start}</div>;
}

export default PlanSelection;
