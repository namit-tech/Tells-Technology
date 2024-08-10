import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Dragsection from "./components/choice-selection/Draggable-section/Dragsection";
import Cart from "./components/selected-area/Cart";

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.style.top = "0"; 
      } else {
        navbar.style.top = "-100px";
      }
    };

    window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="navbar">
        <p>Select Services</p>
      </div>
      <div className="App">
        <Router>
          <div className="drag">
            <Dragsection />
          </div>
          <div className="cart">
            <Cart />
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
