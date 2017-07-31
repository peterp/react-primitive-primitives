export const flattenStyle = (style, defaultStyle = {}) => {
  const flatStyle = Array.isArray(style)
    ? style.reduce((o, s) => ({ ...o, ...s }), {})
    : style;

  return {
    ...defaultStyle,
    ...flatStyle
  };
};
