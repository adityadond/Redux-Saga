import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Counter = React.lazy(() => import("./Counter"));
const HomePage = React.lazy(() => import("./HomePage"));
const Cart = React.lazy(() => import("./Cart"));
const SignUpPage = React.lazy(() => import("./SignUp"));
const Checkout = React.lazy(() => import("./Checkout"));
const ProductDetails = React.lazy(() => import("./ProductDetails"));
const AccountList = React.lazy(() => import("./AccountList"));
const Login = React.lazy(() => import("./Login"));
const ClassComponents = React.lazy(() => import("./ClassComponents"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/counter" element={<Counter />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/signup" element={<SignUpPage />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="/product/:id" element={<ProductDetails />} />
            <Route exact path="/accountList" element={<AccountList />} />
            <Route exact path="/login" element={<Login />} />
            <Route
              exact
              path="/class-components"
              element={<ClassComponents prop="aditya" />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
