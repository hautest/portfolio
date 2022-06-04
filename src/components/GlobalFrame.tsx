import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { flexJustifyCenter } from "../style";

interface GlobalFrameProps {
  children: ReactNode;
}

export const GlobalFrame = styled.div<GlobalFrameProps>`
  min-height: 85vh;
  min-width: 70vh;
  border-radius: 20px;
  ${flexJustifyCenter}
  ${({ theme: { colors, spacing } }) => css`
    background-color: ${colors.background};
    border: solid ${colors.black} 10px;
    padding: ${spacing.lg};
  `}
`;
