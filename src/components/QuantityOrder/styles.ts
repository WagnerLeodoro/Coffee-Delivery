import styled from "styled-components";

export const Counter = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
  gap: 4px;

  width: 72px;
  height: 32px;

  background-color: ${(props) => props.theme.colors["base-button"]};
  border-radius: 6px;

  button {
    background-color: transparent;
    border: none;
    color: ${(props) => props.theme.colors["purple"]};

    :hover {
      color: ${(props) => props.theme.colors["purple-dark"]};
    }
  }

  input[type="number"] {
    width: 20px;
    text-align: center;

    font-family: "Roboto";
    font-size: ${(props) => props.theme.sizes["text-base"]};
    text-align: center;
    background-color: transparent;
    border: none;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
