import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  html * {
    font-family: 'Roboto';
    background-color: ${theme.colors.background};
  }
`;
