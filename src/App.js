import "./App.css";
import Header from "./Components/Header";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

function App() {
  const auth = getAuth();
  const [{}, dispatch] = useStateValue();
  const location = useLocation();
  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = authUser.uid;
        // ...
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
      {location.pathname === "/login" ? (
        <Login />
      ) : (
        <>
          <Header />
          {/* Add other routes here */}
        </>
      )}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
