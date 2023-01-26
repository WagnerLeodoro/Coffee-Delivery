import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  min-height: 19.375rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme.colors["base-card"]};

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -1.25rem;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 1.5rem;

  h2 {
    margin: 1rem;
    font-family: "Baloo 2";
    font-weight: 700;
    font-size: ${(props) => props.theme.sizes["text-lg"]};

    display: flex;
    align-items: flex-end;
    text-align: center;

    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  p {
    margin: 0.25rem;
    font-family: "Roboto";
    font-size: ${(props) => props.theme.sizes["text-sm"]};
    text-align: center;
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.25rem;
  gap: 0.25rem;
  flex-wrap: wrap;

  span {
    border-radius: 10px;
    background: ${(props) => props.theme.colors["yellow-light"]};
    font-family: "Roboto";
    font-size: ${(props) => props.theme.sizes["text-2xs"]};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    font-weight: 700;
  }
`;

export const CardDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin: 2rem;

  width: 13rem;
  height: 2.37rem;

  > button {
    transition: 0.1s;

    :hover {
      background: ${(props) => props.theme.colors["purple"]};
    }
  }

  span {
    display: flex;
    align-items: center;

    width: 67px;

    font-family: "Roboto";
    font-size: ${(props) => props.theme.sizes["text-sm"]};

    text-align: right;

    color: ${(props) => props.theme.colors["base-text"]};

    p {
      font-family: "Baloo 2";
      font-weight: 800;
      font-size: ${(props) => props.theme.sizes["text-xl"]};
      text-align: right;
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }
`;

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
