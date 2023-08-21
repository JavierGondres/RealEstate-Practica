import React from "react";
import './GetStarted.css'
function GetStarted() {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText">Find your residence soon</span>
          <button className="button">
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
