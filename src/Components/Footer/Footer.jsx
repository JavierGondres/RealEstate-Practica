import React from "react";
import "./Footers.css";
function Footer() {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* lside */}
        <div className="flexColStart f-left">
          <img src="./logo2.png" alt="a" />

          <span className="secondaryText">
            Our vision is to make all people <br></br>
            the best place to live for them.
          </span>
        </div>

        {/* r-side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">145 New York, FL 4571, USA</span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About us</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
