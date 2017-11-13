import React from "react";

import { flattenStyle } from "./helpers";

const defaultStyle = {
  display: "flex",
  backgroundColor: "red"
};

export default ({ start, end, locations, colors, style, ...others }) => {
  const backgroundImage = `linear-gradient(0deg, ${colors
    .reverse()
    .map((color, index) => `${color} ${locations[index] * 100}%`)
    .join(", ")})`;
  style.backgroundImage = backgroundImage;
  return <div style={flattenStyle(style, defaultStyle)} {...others} />;
};
