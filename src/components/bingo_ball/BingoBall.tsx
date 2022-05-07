import React from "react";
import "./BingoBall.css";

const BingoBall = ({ ballCount, ballNumber }) => {
  return (
    <div className="ball-container">
      <div>
        <span className="ballCount">{ballCount}</span>
        個目のボール
      </div>
      <br />
      <div className="ballNum">{ballNumber}</div>

      <br />
    </div>
  );
};

export default BingoBall;
