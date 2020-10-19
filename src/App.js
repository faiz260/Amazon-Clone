import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home  from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from './Components/Login/Login';
import {auth} from './Firebase/firebase';
import { useStateValue } from "./Context/StateProvider";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      console.log("THE USER IS >>>> ", authUser);

      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  },[])

  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Routes>
      </Router>
    </div>
  );  
}

export default App;
