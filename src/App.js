import React from "react";
import "./App.css";
import   "./index.css";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import Trending from "./component/Trending";
import ShopNow from "./component/ShopNow";





function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ShopNow/>
      <Trending/>
      
      
    </div>
  );
}

export default App;
