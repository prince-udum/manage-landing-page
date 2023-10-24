import React from "react";
import Illustration from "../assets/illustration-intro.svg";
import Pattern from "../assets/bg-tablet-pattern.svg";
const Hero = () => {
  return (
    <section className="hero">
      <img src={Pattern} alt="" className="pattern" />

      <div className="container">
        <div className="hero-text">
          <h1 className="heading">
            {" "}
            Bring everyone together to build better products.
          </h1>
          <p className="sub-heading">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button className="btn">Get Started</button>
        </div>

        <div className="illustration-container">
          <img src={Illustration} alt="illustration" className="illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
