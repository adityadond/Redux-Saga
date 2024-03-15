import React, { useEffect, useMemo } from "react";
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
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.reducer);
  const small = useSelector((state) => state.clickReducer.click);
  const loading = state.loading;

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "All", item: state.data });
  }, [state.data, dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.title} added to cart!`);
  };

  const toggleDescription = (id) => {
    const updatedSmall = small.map((item) => {
      if (item.id === id) {
        return { ...item, showFullDescription: !item.showFullDescription };
      }
      return item;
    });
    dispatch({ type: "All", item: updatedSmall });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className="main_homepage">
        <h1>Please sign in to view the homepage</h1>
        <Button onClick={loginWithRedirect}>Log In</Button>
      </div>
    );
  }

  return (
    <div className="main_homepage">
      <SmallHeader />
      <div className="homepage_bottom">
        <div className="left">
          <Left />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="card-container">
            {small.map((item) => (
              <div key={item.id} className="card">
                <ul className="ulcard">
                  <li>Title: {item.title}</li>
                  <li>Category: {item.category}</li>
                  <li>
                    Description:{" "}
                    {item.showFullDescription
                      ? item.description
                      : item.description.split(" ").slice(0, 10).join(" ")}
                    {item.description.split(" ").length > 20 && (
                      <span
                        className="show-more"
                        onClick={() => toggleDescription(item.id)}
                      >
                        {item.showFullDescription ? "Show less" : "Show more"}
                      </span>
                    )}
                  </li>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="item-image"
                  />
                  <li>Price: ${item.price}</li>
                  {/* Link to product details page */}
                  <Link to={`/product/${item.id}`} className="pdDetails">
                    <Button variant="contained" color="primary">
                      View Details
                    </Button>
                  </Link>
                </ul>
                <br />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddToCart(item)}
                  className="add-to-cart-btn"
                >
                  Add to Cart
                </Button>
              </div>
            ))}
          </div>
        )}
        <div className="right">
          <Right />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
