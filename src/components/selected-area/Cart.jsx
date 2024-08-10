import React from "react";
import "./cart.css";
import person from "../../assets/person.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <>
      <div className="box">
        <div className="area-1">
          <img src={person} alt="" />
          <div className="head-text">
            <p className="boldness">H2 Salon Brooklyn</p>
            <div className="line-2">
              <p className="boldness">4.9</p>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <p>(4,102)</p>
            </div>
            <p className="location">Brooklyn, Stuyvesant Heights, New York</p>
          </div>
        </div>
        <div className="area-2">
            <p>No services selected</p>
            <hr />
        </div>
        <div className="total-free">
                <p>Total</p>
                <p>free</p>
            </div>
            <div className="btn">
                <button>Continue</button>
            </div>
      </div>
    </>
  );
};

export default Cart;
