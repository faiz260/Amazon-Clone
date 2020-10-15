import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home  from "./Components/Home/Home";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
