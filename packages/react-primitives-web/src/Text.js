import React from "react";
import { flattenStyle } from "./helpers";

export default ({ style, ...props }) =>
  <span style={flattenStyle(style, { lineHeight: 1 })} {...props} />;
