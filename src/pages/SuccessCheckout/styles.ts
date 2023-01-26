import styled from "styled-components";

export const SuccessCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ConfirmationDetails = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  position: relative;
  background: ${({ theme }) => theme.colors["white"]};
  min-width: 32rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }
`;
