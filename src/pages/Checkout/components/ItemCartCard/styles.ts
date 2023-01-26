import styled from "styled-components";

export const ItemCartContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors["base-button"]};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  p {
    align-self: flex-start;
    justify-content: space-between;
    font-weight: 700;
  }
`;

export const ActionsContainer = styled.div`
  margin-top: 0.5rem;
  height: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > div {
    max-width: 4.5rem;
    height: 100%;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0px 8px;

  color: ${(props) => props.theme.colors["base-text"]};
  font-size: 0.75rem;

  height: 100%;
  border: none;

  background: ${(props) => props.theme.colors["base-button"]};
  border-radius: 6px;

  svg {
    color: ${(props) => props.theme.colors["purple"]};
  }

  &:hover {
    background: ${(props) => props.theme.colors["base-hover"]};
  }
`;
