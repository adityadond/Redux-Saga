import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchData, addToCart } from "./action";
import "./HomePage.css";
import { Button } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmallHeader from "./SmallHeader";
import Left from "./Left";
import Right from "./Right";

const HomePage = () => {
  const state = useSelector((state) => state.reducer.data);
  const small = useSelector((state) => state.clickReducer.click);

  const dispatch = useDispatch();
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch({
      type: "All",
      item: state,
    });
  }, [state, dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} added to cart!`);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortenDescription = (description) => {
    const words = description.split(" ");
    if (showFullDescription) {
      return description;
    } else {
      const shortenedDescription = words.slice(0, 10).join(" ");
      return shortenedDescription;
    }
  };

  return (
    <div className="main_homepage">
      <SmallHeader />

      <div className="homepage_bottom">
        <div className="left">
          <Left />
        </div>
        <div className="card-container">
          {small.map((item) => (
            <div key={item.id} className="card">
              <ul className="ulcard">
                <li>Title: {item.title}</li>
                <li>Category: {item.category}</li>
                <li>
                  Description: {shortenDescription(item.description)}
                  {!showFullDescription &&
                    item.description.split(" ").length > 20 && (
                      <span className="show-more" onClick={toggleDescription}>
                        Show more
                      </span>
                    )}
                  {showFullDescription && (
                    <span className="show-less" onClick={toggleDescription}>
                      Show less
                    </span>
                  )}
                </li>
                <img src={item.image} alt={item.title} className="item-image" />
                <li>Price: ${item.price}</li>
                {/* Link to product details page */}
                <Link to={`/product/${item.id}`} className="pdDetails">
                  <Button variant="contained" color="primary">
                    View Details
                  </Button>
                </Link>
              </ul>
              <br></br>
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleAddToCart(item)}
                className="add-to-cart-btn" // Add this className
              >
                Add to Cart
              </Button>
            </div>
          ))}
        </div>

        <div className="right">
          <Right />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
