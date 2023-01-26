import styled from "styled-components";

export const CheckoutContainer = styled.main`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;

  form {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`;

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;
