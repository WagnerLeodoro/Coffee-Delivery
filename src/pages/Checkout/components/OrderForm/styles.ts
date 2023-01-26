import styled from "styled-components";

export const CheckoutBaseForm = styled.div`
  width: 100%;
  border-radius: 6px;
  padding: 2.5rem;
`;

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 40rem;
  margin-bottom: 2rem;
`;

export const FormSectionContainer = styled(CheckoutBaseForm)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: ${(props) => props.theme.colors["base-card"]};
`;

export const CheckoutPaymentForm = styled(CheckoutBaseForm)`
  display: flex;
  width: 40rem;
  min-height: 12.93rem;

  span {
    color: ${(props) => props.theme.colors["purple"]};
  }
`;

export const CheckoutAddressForm = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;
  grid-auto-flow: dense;

  background: ${(props) => props.theme.colors["base-card"]};

  span {
    color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  .cep {
    grid-column: span 3;
  }
  .street {
    grid-column: span 3;
  }
  .complement {
    grid-column: span 2;
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  > p {
    grid-column: span 3;
  }
`;
