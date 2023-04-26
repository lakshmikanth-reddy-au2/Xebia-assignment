import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./features/navBar/NavBar";
import Home from "./features/home/Home";
import Instamart from "./features/instamart/Instamart";
import "./App.css";
import RestaurantDetail from "./features/RestaurantDetail/RestaurantDetail";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instamart" element={<Instamart />}/>
          <Route path="/restaurant" element={<RestaurantDetail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
