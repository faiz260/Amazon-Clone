import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import { auth } from "./Firebase/firebase";
import { useStateValue } from "./Context/StateProvider";
import Checkout from "./Components/Checkout/Checkout";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>>> ", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe()
    }
 
  }, []);
  console.log("THE USER IS >>>> ", user);
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/checkout">
            <Checkout/> 
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
