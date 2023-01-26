import { ButtonHTMLAttributes, ReactNode } from "react";
import { CartButton, CART_COLORS } from "./styles";

interface CartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  cartBgColor: keyof typeof CART_COLORS;
  cartColor: keyof typeof CART_COLORS;
}

export function ShoppingCartButton({
  children,
  cartBgColor,
  cartColor,
  ...rest
}: CartButtonProps) {
  return (
    <CartButton cartBgColor={cartBgColor} cartColor={cartColor} {...rest}>
      {children}
    </CartButton>
  );
}
