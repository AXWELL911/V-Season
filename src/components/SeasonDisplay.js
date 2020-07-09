/* jshint ignore:start */
import React from "react";
import "./SeasonDisplay.css";

const SeasonDisplay = (props) => {
  const month = new Date().getMonth();
  const season =
    month > 2 && month < 9
      ? props.lat > 0
        ? "Summer"
        : "Winter"
      : props.lat > 0
      ? "Winter"
      : "Summer";
  const icon = season === "Winter" ? "snowflake" : "sun";
  const icon_para = season === "Winter" ? "snowflakes" : "suns";

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`}></i>
      <b className={`${icon_para}`}>{season}</b>
      <i className={`icon-right massive ${icon} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
