import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 6.5rem;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: sticky;

  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap: 0.75rem;
  }
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderButtonProps {
  variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors["white"]};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }
  font-size: ${({ theme }) => theme.sizes["text-sm"]};
  ${({ variant }) => css`
    background: ${({ theme }) => theme.colors[`${variant}-light`]};
    color: ${({ theme }) => theme.colors[`${variant}-dark`]};
    span {
      background: ${({ theme }) => theme.colors[`${variant}-dark`]};
    }
  `}
  ${({ variant }) =>
    variant === "purple" &&
    css`
      svg {
        color: ${({ theme }) => theme.colors[`${variant}`]};
      }
    `}
`;
