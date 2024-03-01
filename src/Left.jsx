import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clickAction } from "./action";
import "./Left.css";

function Left() {
  const dispatch = useDispatch();

  const [selectedCheckbox, setSelectedCheckbox] = useState(false);

  const items = [
    { id: 1, name: "All" },
    { id: 2, name: "men's clothing" },
    { id: 3, name: "electronics" },
    { id: 4, name: "jewelery" },
    { id: 5, name: "women's clothing" },
  ];

  const handleCheckboxChange = (itemName) => {
    setSelectedCheckbox(itemName); // Update selected checkbox state
    dispatch(clickAction(itemName));
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="leftcheckbox">
          <div className="check">
            <input
              type="checkbox"
              id={item.id}
              value={item.name}
              checked={selectedCheckbox === item.name} // Check if the current item matches the selected checkbox
              onChange={() => handleCheckboxChange(item.name)}
            />
          </div>
          <div>
            <label htmlFor={item.id} className="laeblll">
              {item.name}
            </label>
          </div>
        </div>
      ))}
    </>
  );
}

export default Left;
