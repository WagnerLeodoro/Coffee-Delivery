import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
`;

interface InputContainerProps {
  hasError: boolean;
}

export const InputStyleContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  gap: 0.25rem;

  height: 2.62rem;

  background: ${(props) => props.theme.colors["base-input"]};

  border: 0;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  border-radius: 4px;

  &:focus-within {
    border-color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors["yellow-dark"]};
    `}
`;

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  outline: none !important;
  padding: 0 0.75rem;
  height: 100%;
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors["base-text"]};

  &::placeholder {
    font-family: "Roboto";
    font-size: ${(props) => props.theme.sizes["text-sm"]};
    color: ${(props) => props.theme.colors["base-label"]};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const RightText = styled.p`
  font-size: 0.75rem;
  margin-right: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors["base-label"]};
`;
