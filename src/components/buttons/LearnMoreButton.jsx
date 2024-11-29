import React from "react";
import "./Buttons.css";

const LearnMoreButton = (props) => {
  return (
    <a href="#" className="button-style">
      {props.buttonTitle}
    </a>
  );
};

export default LearnMoreButton;
