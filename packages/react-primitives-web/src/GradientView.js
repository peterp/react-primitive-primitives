import React from "react";

import { flattenStyle } from "./helpers";

export const radiansToDegrees = radians => radians * 180 / Math.PI;

export const angleBetweenPoints = (p1, p2) => {
  let angle = radiansToDegrees(Math.atan2(p2.y - p1.y, p2.x - p1.x));
  if (angle < 0) {
    angle += 360;
  }
  return angle;
};

const defaultStyle = {
  display: "flex"
};

export default ({ start, end, locations, colors, style, ...others }) => {
  const backgroundImage = `linear-gradient(${angleBetweenPoints(
    start,
    end
  )}deg, ${colors
    .reverse()
    .map((color, index) => `${color} ${locations[index] * 100}%`)
    .join(", ")})`;

  const flatStyle = flattenStyle(style, defaultStyle);
  flatStyle.backgroundImage = backgroundImage;

  return <div style={flatStyle} {...others} />;
};
