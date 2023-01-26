import styled from "styled-components";

export const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;
interface IconBackgroundProps {
  iconBg:
    | "yellow"
    | "yellow-light"
    | "yellow-dark"
    | "purple"
    | "purple-light"
    | "purple-dark"
    | "base-text";
}

export const BaseIcon = styled.span<IconBackgroundProps>`
  justify-content: center;
  align-items: center;
  padding: 8px;

  width: 2rem;
  height: 2rem;

  background-color: ${({ theme, iconBg }) => theme.colors[iconBg]};
  color: ${(props) => props.theme.colors["white"]};
  border-radius: 100%;
`;
