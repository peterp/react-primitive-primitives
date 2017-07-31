import React from "react";
import { flattenStyle } from "./helpers";

const defaultStyle = {
  display: "flex",
  flexDirection: "column"
};

export default ({ style, ...props }) => {
  return <div style={flattenStyle(style, defaultStyle)} {...props} />;
};
