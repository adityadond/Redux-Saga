import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeQty } from "./action";

const Dropdown = ({ item }) => {
  const [value, setValue] = useState(parseInt(item.quantity));
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const selectedValue = parseInt(event.target.value);
    setValue(selectedValue);
    dispatch(changeQty(item.id, selectedValue));
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div>
      <select
        value={value}
        onChange={handleChange}
        style={{ margin: "10px", padding: "2px" }}
      >
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
