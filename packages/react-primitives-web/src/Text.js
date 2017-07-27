import React from "react";
import { flattenStyle } from "./helpers";

export default ({ style, ...props }) =>
  <p style={flattenStyle(style)} {...props} />;
