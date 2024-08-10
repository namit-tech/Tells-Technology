import React, { forwardRef } from "react";
import "./card.css";

const Card = forwardRef((props, ref) => {
    const { refs } = props;
  return (
    <>
      <div className="section-1" ref={el => refs.current.section1 = el}>
        <h2>Featured</h2>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>Haircut</h3>
              <p className="text-color">1hr, 30mins - 2 hrs</p>
              <p className="text-color">
                We do not have pricing for trims. All haircuts are full services
                that include a wash..
              </p>
              <p>from $90</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Deep Condition (Standard)</h3>
              <p className="text-color">15 mins</p>
              <p className="text-color">
                This is an add on deep conditioning treatment service for
                clients who need to r...
              </p>
              <p>$25</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Blow Dry/Silk Press</h3>
              <p className="text-color">1hr - 2hrs</p>
              <p className="text-color">
                Please do NOT apply castar oil or cocnut oil to hair before
                service. If you have N...
              </p>
              <p>$85</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Root Touch-Up (Single Process)</h3>
              <p className="text-color">1hr</p>
              <p className="text-color">
                For RETURNING client, and anyone needing a root touch up. With
                less that 2 in...
              </p>
              <p>$125</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Wash & GO - Curly Style</h3>
              <p className="text-color">1hr, 25 mins</p>
              <p>$60</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Haircut Short Tapered</h3>
              <p className="text-color">1hr - 2hrs</p>
              <p className="text-color">
                A taper is a cut that leaves your hair long at the top and short
                on the sides. Hair...
              </p>
              <p>$125</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2" ref={el => refs.current.section2 = el}>
        <h2>Haircutting</h2>
        <p>
          We do not have pricing for trims. All haircuts are full services that
          include a wash and style; <br /> either a wash and go or a silk press.
          Specify with stylist upon arrival.
        </p>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>A Bob Haircut</h3>
              <p className="text-color">1hr - 2 hrs</p>
              <p className="text-color">
                A bob cut, is a short to medium length haircut, in which the
                hair is typically cut...
              </p>
              <p>from $110</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Haircut</h3>
              <p className="text-color">1hr, 30mins - 2 hrs</p>
              <p className="text-color">
                We do not have pricing for trims. All haircuts are full services
                that include wa..
              </p>
              <p>from $90</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Haircut Short Tapered</h3>
              <p className="text-color">1hr - 2hrs</p>
              <p className="text-color">
                A taper is a cut that leaves your hair long at the top and short
                on the sides. Ha...
              </p>
              <p>$125</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-3" ref={el => refs.current.section3 = el}>
        <h2>Styling</h2>
        <p>Our Silk Press service does not include a trim</p>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>Blow Dry/Silk Press</h3>
              <p className="text-color">1hr - 2hrs</p>
              <p className="text-color">
                Please do NOT apply castar oil or cocnut oil to hair before
                service. If you N...
              </p>
              <p>$85</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Half Up Half Down Ponytail</h3>
              <p className="text-color">2 hrs</p>
              <p className="text-color">Hair is not included.</p>
              <p>from $225</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Shampoo/Wrap (Relaxed Hair)</h3>
              <p className="text-color">1hr, 50 mins</p>
              <p>$85</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Pony Tail</h3>
              <p className="text-color">2 hrs Ponytail</p>
              <p className="text-color">Hair is NOT provided.</p>
              <p>$150</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-4" ref={el => refs.current.section4 = el}>
        <h2>Color Services</h2>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>NEW SINGLE PROCESS WITH FULL HEAD HIGHLIGHTS</h3>
              <p className="text-color">2 hrs, 30 mins</p>
              <p className="text-color">
                This process completely changes your hair color to a brown, with
                a full of bl..
              </p>
              <p>$495</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>NEW FULL HEAD HIGHLIGHTS</h3>
              <p className="text-color">2 hrs, 390 mins</p>
              <p className="text-color">
                A full head of highlights to make hair blonde, golden, or soft
                browns. Natural..
              </p>
              <p>from $410</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>BLONDE HIGHLIGHTS (Half Head Highlights)</h3>
              <p className="text-color">2 hrs, 30 mins</p>
              <p className="text-color">
                A half head of highlights to make hair blonde, golden, or softs
                browns. Natural.
              </p>
              <p>from $175</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>
                LIGHT BROWN/ SOFT GOLDEN BROWN/ LIGHT ASH BROWN (virgin Single
                Process w/ Few Highlights)
              </h3>
              <p className="text-color">2 hrs, 15 mins</p>
              <p className="text-color">
                MUST BOOK STYLING SERVICE. (Please book a silk press, haircut,
                or wash and)
              </p>
              <p>$185</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5"ref={el => refs.current.section5 = el}>
        <h2>Natural Hairstyling</h2>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>Wash & Go - Curly Style</h3>
              <p className="text-color">1 hrs, 25 mins</p>
              <p>$60</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Braid-Out</h3>
              <p className="text-color">1 hrs, 50 mins</p>
              <p>from $125</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Flexi-Rod Set</h3>
              <p className="text-color">3 hrs, 5 mins</p>
              <p>from $90</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Flat Twist</h3>
              <p className="text-color">2 hrs</p>
              <p>$125</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-6" ref={el => refs.current.section6 = el}>
        <h2>Relaxer/ Texturizer/ Keratin</h2>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>Relaxer</h3>
              <p className="text-color">1 hrs, 25 mins</p>
              <p>$110</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Relaxer and Haircut</h3>
              <p className="text-color">1 hrs, 40 mins</p>
              <p> $160</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Virign Relaxer and Hair Cut</h3>
              <p className="text-color">2 hrs, 15 mins</p>
              <p>$200</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Halo and Haircut</h3>
              <p className="text-color">1 hrs</p>
              <p>$140</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-7" ref={el => refs.current.section7 = el}>
        <h2>Extension, Installs and Wigs</h2>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>Install Removal</h3>
              <p className="text-color">1 hrs, 30 mins</p>
              <p className="text-color">
                Service includes safe removal of extension hair, take down of
                braided 
              </p>
              <p>$100</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Intricate Weave Install</h3>
              <p className="text-color">5 hrs</p>
              <p className="text-color">
                An install elaborately curated with you in mind, Service
                includes the following:
              </p>
              <p> $600</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Basic Weave Install</h3>
              <p className="text-color">3 hrs, 30 mins</p>
              <p>$350</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Braid Down for Wig</h3>
              <p className="text-color">1 hrs, 30 mins</p>
              <p className="text-color">
                Does not include instillation. Includes wash condition and braid
                down.
              </p>
              <p>$100</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-8" ref={el => refs.current.section8 = el}>
        <h2>Treatments</h2>
        <div className="cards">
          <div className="card">
            <div className="card-text">
              <h3>Detox Shampoo</h3>
              <p className="text-color">20 mins</p>
              <p className="text-color">
                This is an odd on treatment for clients who have taken out
                braids or a protective
              </p>
              <p>$40</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Deep Condition (Standard)</h3>
              <p className="text-color">15 mins</p>
              <p className="text-color">
                This is an add on deep conditioning treatment service for
                clients who need..
              </p>
              <p> $600</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Basic Weave Install</h3>
              <p className="text-color">3 hrs, 30 mins</p>
              <p>$350</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
          <div className="card">
            <div className="card-text">
              <h3>Braid Down for Wig</h3>
              <p className="text-color">1 hrs, 30 mins</p>
              <p className="text-color">
                Does not include instillation. Includes wash condition and braid
                down.
              </p>
              <p>$100</p>
            </div>
            <div className="card-btn">
              <a href="/" className="icons">
                {" "}
                +{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Card;
