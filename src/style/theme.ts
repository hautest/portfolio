const colors = {
  black: "#000000",
  white: "#FFFFFF",
  background: "#E6E7E8",
};

const spacing = {
  lg: "32px",
  md: "16px",
  sm: "8px",
};

export const theme = {
  colors,
  spacing,
};

export type ThemeColorType = keyof typeof colors;
