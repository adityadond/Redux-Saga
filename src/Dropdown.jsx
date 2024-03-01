import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeQty } from "./action";

const Dropdown = ({ item }) => {
  console.log(item);
  const [value, setValue] = useState(item.quantity);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    console.log(selectedValue);
    dispatch(changeQty(item.id, selectedValue));
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <select value={value} onChange={handleChange}>
        {items.map((i) => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
