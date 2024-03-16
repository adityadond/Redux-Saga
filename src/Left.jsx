import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickAction } from "./action";
import "./Left.css";

function Left() {
  const dispatch = useDispatch();
  const checkValue = useSelector((state) => state.clickReducer.checkValue);
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const items = [
    { id: 1, name: "All" },
    { id: 2, name: "men's clothing" },
    { id: 3, name: "electronics" },
    { id: 4, name: "jewelery" },
    { id: 5, name: "women's clothing" },
  ];

  useEffect(() => {
    if (checkValue) {
      setSelectedCheckbox(null); // Uncheck the checkbox when checkValue is true
    }
  }, [checkValue]);

  const handleCheckboxChange = (itemName) => {
    setSelectedCheckbox(itemName);
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
              checked={selectedCheckbox === item.name}
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
