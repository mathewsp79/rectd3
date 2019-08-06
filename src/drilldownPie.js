import React from "react";

const drilldownPie = ({ data, x, y }) => {
  return <g transform={`translate(${x} ${y})`} />;
};

export default drilldownPie;
