import React from "react";
import "./SplashPage.css";

const SplashPage = props => (
  <div className="SplashPage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    {props.children}
  </div>
);

export default SplashPage;
