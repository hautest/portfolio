import styled from "styled-components";

interface ButtonProps {
  direct: "back" | "front";
  onClick?: () => void;
}

export function RouterButton({ direct, onClick }: ButtonProps) {
  const directIcon = direct === "back" ? "⇐" : "⇒";
  return (
    <StyledRouterButton onClick={onClick}>{directIcon}</StyledRouterButton>
  );
}

export const StyledRouterButton = styled.button`
  font-size: 40px;
  height: fit-content;
  width: fit-content;
  border-radius: 60px;
  border: 0;
  background-color: ${({ theme }) => theme.colors.white};
  :hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
