import React from "react";

export default ({ onPress, ...props }) => <div onClick={onPress} {...props} />;
