import {
  HeaderButton,
  HeaderButtonsContainer,
  HeaderContainer,
} from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCartSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cartQuantity } = useContext(CartContext);

  return (
    <HeaderContainer>
      <div>
        <NavLink to="/" title="Home">
          <img src={logo} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={22} weight="fill" />
            <p>Porto Alegre</p>
          </HeaderButton>
          <NavLink to="/checkout" title="Checkout">
            <HeaderButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCartSimple width={22} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  );
}
