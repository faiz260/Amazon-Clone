import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home  from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import Login from './Components/Login/Login';

function App() {
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
