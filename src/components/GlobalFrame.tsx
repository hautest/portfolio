import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { flexJustifyCenter } from "../style";

interface GlobalFrameProps {
  children: ReactNode;
}

export const GlobalFrame = styled.div<GlobalFrameProps>`
  height: 87vh;
  border-radius: 30px;
  ${flexJustifyCenter}
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.white};
    border: solid ${colors.black} 10px;
    padding: ${spacing.lg};
  `}
`;
