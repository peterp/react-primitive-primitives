import React from "react";
import { flattenStyle } from "./helpers";

export default ({ source, style, ...props }) =>
  <img src={source} style={flattenStyle(style)} {...props} />;
