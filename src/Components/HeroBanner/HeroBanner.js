import React from "react";
import About from "./about";
import "./banner.css";
import Contact from "./contact";
import CountDown from "./countdown";

export const HeroBanner = ({ allBanner }) => {

  return (
    <React.Fragment>
      <div className="heroMain">
        <div id="launching-soon">
          <img src="/images/logo.svg"
            className="logo"
            alt="StepsForever"
          />
          <div className="content">
            <h1>Launching Soon</h1>
            <p>
              Get Ready to Experience a New Style of Fashion with our Upcoming
              Online Store
            </p>
          </div>
          <CountDown />
          <div className="btn-group">
            {/* <Subscribe /> */}

            {/* <About /> */}

            {/* <Contact /> */}
          </div>

          <div className="social-icons-group">
            <a
              className="social-icon"
              href="https://www.facebook.com/shoedelight.official"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/images/facebook.svg" alt="facebook" />
            </a>
            <a
              className="social-icon"
              href="https://www.instagram.com/shoedelight.official/"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/images/insta.svg" alt="insta" />
            </a>
            <a
              className="social-icon"
              href="https://maps.app.goo.gl/Re4VLj2wBJMdd2jE7"
              rel="noreferrer"
              target="_blank"
            >
              <img src="/images/shop.svg" alt="shop" />
            </a>
          </div>
        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "600px",
        }}>
          <img src="/images/logo.svg"
            alt="StepsForever"
            className="logo" />
          <div className="content" style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            color: "#fff",
          }}>
            <h1>Step Out with Confidence</h1>
            <p>Comfort that carries you wherever you go.</p>
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};