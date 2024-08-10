import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./dragsection.css";
import { Link } from "react-router-dom";
import Card from "../Cards-section/Card";

const Dragsection = () => {
  const tabsBoxRef = useRef(null);
  const cardRefs = useRef({});
  const [isDragging, setIsDragging] = useState(false);

  const handleIcons = () => {
    const tabsBox = tabsBoxRef.current;
    const scrollVal = tabsBox.scrollLeft;
    const maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
    const leftIcon = document.getElementById("left").parentElement;
    const rightIcon = document.getElementById("right").parentElement;

    leftIcon.style.display = scrollVal <= "flex";
    rightIcon.style.display =
      maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
  };

  const scrollTabs = (direction) => {
    const tabsBox = tabsBoxRef.current;
    tabsBox.scrollLeft += direction === "left" ? -340 : 340;
    handleIcons();
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const tabsBox = tabsBoxRef.current;
    tabsBox.classList.add("dragging");
    tabsBox.scrollLeft -= e.movementX;
    handleIcons();
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      tabsBoxRef.current.classList.remove("dragging");
    }
  };

  const handleWheel = (e) => {
    e.preventDefault();
    const tabsBox = tabsBoxRef.current;
    const scrollAmount = e.deltaX || e.deltaY; 
    const adjustedScrollAmount = scrollAmount * 0.5; 

    tabsBox.scrollLeft += adjustedScrollAmount;
    handleIcons();
  };

  const scrollToSection = (section) => {
    const sectionRef = cardRefs.current[section];
    if (sectionRef) {
      sectionRef.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleIcons(); // Initial call to handle icons visibility
    const tabsBox = tabsBoxRef.current;
    tabsBox.addEventListener("wheel", handleWheel, { passive: false });

    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      tabsBox.removeEventListener("wheel", handleWheel);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <>
      <div className="links">
        <Link to="/services" className="service-link">
          Services
        </Link>
        <span className="span-service"> &gt; </span>
        <p>Professional</p>
        <span className="span"> &gt; </span>
        <p>Time</p>
        <span className="span"> &gt; </span>
        <p>Confirm</p>
        <span className="span"> &gt; </span>
      </div>
      <div>
        <h1>Select Services</h1>
      </div>
        <div className="wrapper">
          <ul
            className="tabs-box"
            ref={tabsBoxRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
          >
            <button className="tab" onClick={() => scrollToSection("section1")}>Featured</button>
            <button className="tab" onClick={() => scrollToSection("section2")}>Haircutting</button>
            <button className="tab" onClick={() => scrollToSection("section3")}>Styling</button>
            <button className="tab" onClick={() => scrollToSection("section4")}>Color Services</button>
            <button className="tab" onClick={() => scrollToSection("section5")}>Natural Hairstyling</button>
            <button className="tab" onClick={() => scrollToSection("section6")}>Relaxer/Texturizer/Keratin</button>
            <button className="tab" onClick={() => scrollToSection("section7")}>Extension, Installs and Wigs</button>
            <button className="tab" onClick={() => scrollToSection("section8")}>Treatments</button>
          </ul>
          <div className="icon-container">
            <div className="icon" onClick={() => scrollTabs("left")}>
              <FontAwesomeIcon id="left" icon={faAngleLeft} />
            </div>
            <div className="icon" onClick={() => scrollTabs("right")}>
              <FontAwesomeIcon id="right" icon={faAngleRight} />
            </div>
          </div>
        </div>
        <div>
          <Card refs={cardRefs}/>
        </div>
    </>
  );
};

export default Dragsection;
// https://docs.google.com/document/d/1vJl-wgVjzHvC6Nc1d3m7OUmrEnl7enHgAmRlga1Uc1A/edit?usp=sharing






