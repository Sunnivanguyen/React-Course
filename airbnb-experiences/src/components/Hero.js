import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <nav className="Grid-hero">
        <div className="first-column">
          <img className="grid-img" src="../images/image-1.png" />
        </div>

        <div className="second-column">
          <img className="grid-img" src="../images/image-2.png" />
          <img className="grid-img" src="../images/image-3.png" />
        </div>

        <div className="third-column">
          <img className="grid-img" src="../images/image-4.png" />
          <img className="grid-img" src="../images/image-5.png" />
        </div>

        <div className="fourth-column">
          <img className="grid-img" src="../images/image-6.png" />
          <img className="grid-img" src="../images/image-7.png" />
        </div>

        <div className="fifth-column">
          <img className="grid-img" src="../images/image-8.png" />
          <img className="grid-img" src="../images/image-9.png" />
        </div>
      </nav>
      <nav className="online-experience">
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </nav>
    </section>
  );
}
