import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Components/Checkout";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Orders from "./Components/Orders";
import Payment from "./Components/Payment";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import "./App.css";

function App() {
  const { dispatch } = useStateValue();
  const promise = loadStripe(
    "pk_test_51MZdSXBsUKGTjgZkAt9Ye9wutpFF8zoo3hDNzB7uz9y0Q3ZaG4yoopLkKI7eY8vBCpMd9xtnwpLOPY3yKJaiet0M00EZCUtNwQ"
  );

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("The user ID is __> ", authUser.uid);

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // User is signed out
        // ...
        dispatch({
          type: "SET_USER",
          user: null,
          // user: "",
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/payment"
          element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
