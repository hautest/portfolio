import styled, { css } from "styled-components";

import { ThemeColorType } from "../style";

interface TypographyProps {
  color?: ThemeColorType;
  size?: string;
}

export const Typography = styled.div<TypographyProps>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ size }) => size};
`;
