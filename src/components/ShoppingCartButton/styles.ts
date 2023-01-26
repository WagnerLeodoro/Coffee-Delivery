import styled from "styled-components";

export const CART_COLORS = {
  white: "white",
  yellow: "yellow",
  yellow_light: "yellow-light",
  yellow_dark: "yellow-dark",
  purple: "purple",
  purple_light: "purple-light",
  purple_dark: "purple-dark",
} as const;

interface CartColorProps {
  cartBgColor: keyof typeof CART_COLORS;
  cartColor: keyof typeof CART_COLORS;
}

export const CartButton = styled.button<CartColorProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 38px;
  height: 38px;

  color: ${(props) => props.theme.colors[CART_COLORS[props.cartColor]]};
  background: ${(props) => props.theme.colors[CART_COLORS[props.cartBgColor]]};
  border-radius: 6px;
  border: none;
`;
