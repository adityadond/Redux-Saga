import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickAction } from "./action";
import "./smallHeader.css";

function SmallHeader() {
  const [checkValue, setCheckValue] = useState(true);
  const dispatch = useDispatch();

  const items = [
    { id: 1, name: "All" },
    { id: 2, name: "men's clothing" },
    { id: 3, name: "electronics" },
    { id: 4, name: "jewelery" },
    { id: 5, name: "women's clothing" },
  ];

  const clickHandler = (itemName) => {
    dispatch(clickAction(itemName, checkValue));
  };

  const clickHandlerWithRipple = (itemName, e) => {
    clickHandler(itemName);

    // Create ripple effect
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    e.currentTarget.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className="smallHeader">
      <div className="smallHeader-items">
        {items.map((item) => (
          <div
            key={item.id}
            className="smallHeader-item"
            onClick={(e) => clickHandlerWithRipple(item.name, e)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SmallHeader;
