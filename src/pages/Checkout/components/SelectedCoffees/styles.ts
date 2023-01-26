import styled from "styled-components";
import { CheckoutBaseForm } from "../OrderForm/styles";

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  width: 28rem;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DetailsContainer = styled(CheckoutBaseForm)`
  border-radius: 6px 44px 6px 44px;
  background: ${(props) => props.theme.colors["base-card"]};
  padding: 2.5rem;
`;

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > p {
    font-family: "Roboto";
    font-size: ${(props) => props.theme.sizes["text-sm"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;
