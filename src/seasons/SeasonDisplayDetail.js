import "./SeasonDisplayDetail.css";
import React from "react";

const seasonConfig = {
  summer: {
    header: "Let's hit the beach",
    iconName: "sun",
  },
  winter: {
    header: "Burr, It's chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  }
  return lat > 0 ? "winter" : "summer";
};

const SeasonDisplayDetail = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { header, iconName } = seasonConfig[season];
  return (
    <div className={`season-display-detail ${season}`}>
      <i className={`icon-left icon massive ${iconName}`} />
      <h1>{header}</h1>
      <i className={`icon-right icon massive ${iconName}`} />
    </div>
  );
};

export default SeasonDisplayDetail;
